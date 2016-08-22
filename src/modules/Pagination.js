import React from 'react'

const Pagination = ({onClick, id, text}) => {
	return (
		<a className="mobile" href="javascript:void(0)" onClick={onClick} id={id}>{text}</a>
	)
}

Pagination.propTypes = {
	onClick: React.PropTypes.func.isRequired,
	id: React.PropTypes.string.isRequired,
	text: React.PropTypes.string.isRequired
}

export default Pagination