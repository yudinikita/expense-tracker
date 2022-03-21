import React from 'react'
import ReactDOM from 'react-dom'
import { Render } from 'Render'
import reportWebVitals from './plugins/reportWebVitals'
import './plugins/i18next'
import './plugins/dayjs'

const $root = document.getElementById('root')
ReactDOM.render(<Render />, $root)

reportWebVitals()
