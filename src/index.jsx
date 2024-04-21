/* @refresh reload */
import { render } from 'solid-js/web'

import './styles/app.css'
import App from './components/app'

const root = document.getElementById('root')

render(() => <App />, root)
