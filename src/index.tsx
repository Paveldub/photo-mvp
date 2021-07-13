import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { App } from './App'
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <App />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)
