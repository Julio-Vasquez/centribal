import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

//import Store from './store'
import App from './views/App'

import './sass/main.scss'
/*<Provider store={Store}>
  </Provider>,*/

ReactDOM.render(<App />, document.getElementById('root'))
