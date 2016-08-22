import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/paginationActions';
import Table from './DataTable'

function mapStateToProps(state) {
	return {
		...state
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: {
			pagination: bindActionCreators(actions, dispatch)
		}
	}
}

class App extends React.Component {
	static propTypes = {
		heading: React.PropTypes.string.isRequired
	}

	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div>
				<h1>{this.props.heading}</h1>
				<Table {...this.props} />
			</div>
		)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);