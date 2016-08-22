import * as actionTypes from '../constants/actionTypes';

export const nextPage = () => {
	return {
		type: actionTypes.NEXT_PAGE
	}
}

export const previousPage = () => {
	return {
		type: actionTypes.PREVIOUS_PAGE
	}
}