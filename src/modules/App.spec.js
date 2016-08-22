/*eslint-env mocha */

import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import { createStore } from 'redux'
import pageReducer from '../reducers/pageReducer'
import App from './App'

const initialState = {
	current: 0
}
const store = createStore(pageReducer, initialState)


describe('The main app component', () => {
	it('Should render a heading', () => {
		const props = {
			heading: "Savings accounts"
		}
		const el = shallow(
			<App heading='Savings accounts' store={store} />
		)
		expect(el.contains(props.heading))
	})
	it('Should error when no title is defined', () => {
		let spy = expect.spyOn(console, 'error')
		shallow(
			<App store={store} />
		)
		expect(spy).toHaveBeenCalled()
		spy.restore()
	})
})
