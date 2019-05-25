import { h, render } from 'preact'

import css from '../styles/index.scss'
import App from './components'

render(
  <App />,
  document.querySelector('#app')
)
