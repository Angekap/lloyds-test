import Reactable from 'Reactable'
import Pagination from './Pagination'
import React from 'react'

const {Table} = Reactable

export default class DataTable extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			dataList: {}
		}
		this.next = this.next.bind(this)
		this.previous = this.previous.bind(this)
	}

	loadRemoteData() {
		return [
			{'Product': 'Fixed Saver','Interest rate': '2.2%','Minimum deposit': '£500','Interest type': 'Fixed'},
			{'Product': 'Flex Saver','Interest rate': '1.5%','Minimum deposit': '£0','Interest type': 'Tracker'},
			{'Product': 'Offset Saver','Interest rate': '1.8%*','Minimum deposit': '£1000','Interest type': 'Fixed'}
		]
	}

	getPages(data) {
		return data.filter((item) => {
			return item.Product
		})
	}

	componentWillMount() {
		const data = this.loadRemoteData()
		this.setState({
			'dataList': data,
			'pages': this.getPages(data)
		})
	}

	componentDidMount() {
		const { store } = this.context;
		this.unsubscribe = store.subscribe(() => {
			this.render()
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	next(event) {
		event && event.stopPropagation()
		const { actions } = this.props
		actions.pagination.nextPage()
	}

	previous(event) {
		event && event.stopPropagation()
		const { actions } = this.props
		actions.pagination.previousPage()
	}

	getText(which) {
		const {dataList} = this.state
		const { store } = this.context;
		const current = store.getState().current
		const target = (which === 'next') ? current + 1 : current -1
		let text
		try {
			text = dataList[target].Product
		} catch(e) {
			text = ''
		}
		return text
	}

	render() {
		const {dataList} = this.state
		const { store } = this.context;
		const current = store.getState().current
		return (
			<div>
				<Table className={'offset' + current} data={dataList}>
				</Table>
				<Pagination onClick={this.next} id="next" text={this.getText('next')} />
				<Pagination onClick={this.previous} id="previous" text={this.getText('previous')} />
			</div>
		)
	}
}

DataTable.contextTypes = {
	store: React.PropTypes.object
}
DataTable.propTypes = {
	actions: React.PropTypes.object
}