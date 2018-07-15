import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
