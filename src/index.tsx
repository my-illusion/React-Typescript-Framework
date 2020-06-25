/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((module as any).hot) {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;(module as any).hot.accept('./App', function () {
        ReactDOM.render(<App />, document.getElementById('root'))
    })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
