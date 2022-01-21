import React from 'react'
import ReactDOM from 'react-dom'
import ApolloProvider from './apollo'
import reportWebVitals from './reportWebVitals'

const $root = document.getElementById('root')
ReactDOM.render(<ApolloProvider />, $root)

reportWebVitals()
