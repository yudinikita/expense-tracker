import React from 'react'
import ReactDOM from 'react-dom'
import { MyApolloProvider } from './apollo'
import reportWebVitals from './reportWebVitals'

const $root = document.getElementById('root')
ReactDOM.render(<MyApolloProvider />, $root)

reportWebVitals()
