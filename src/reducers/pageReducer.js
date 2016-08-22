import * as actions from './../constants/actionTypes'

export default function page(state, action) {
	switch (action.type) {
		case actions.NEXT_PAGE:
			return {
				current: state.current + 1
			}
		case actions.PREVIOUS_PAGE:
			return {
				current: state.current - 1
			}
		default:
			return state;
	}
}