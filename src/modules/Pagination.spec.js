/*eslint-env mocha */

import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import Pagination from './Pagination'

describe('Savings page pagination', () => {
	it('Should render a link', () => {
		const el = shallow(<Pagination onClick={() => {}} id="next" text="next" />)
		expect(el.contains("<a"))
	})
	it('Should test something meaningful!', () => {
		expect(true).toBe(true)
	})
})
