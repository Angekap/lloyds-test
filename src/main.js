import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './modules/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import pageReducer from './reducers/pageReducer'

process.title = 'testApp'
const initialState = {
	current: 0
}
const store = createStore(pageReducer, initialState, window.devToolsExtension && window.devToolsExtension())

ReactDOM.render(
	<Provider store={store}>
		<App heading='Savings accounts' />
	</Provider>,
	document.getElementById('app')
)