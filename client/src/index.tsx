import React from 'react'
import ReactDOM from 'react-dom'
import { Render } from 'Render'
import * as serviceWorkerRegistration from './plugins/serviceWorker'
import reportWebVitals from './plugins/reportWebVitals'
import './plugins/i18next'
import './plugins/dayjs'

const $root = document.getElementById('root')
ReactDOM.render(<Render />, $root)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
