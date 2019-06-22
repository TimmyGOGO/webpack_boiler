import * as React from 'react'
import ReactDOM from 'react-dom'
import App from './main/App'

const wrapper = document.getElementById('root')
wrapper ? ReactDOM.render(<App />, wrapper) : false
