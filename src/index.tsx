import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { HashRouter } from 'react-router-dom'

import App from './App'
import './styles/null.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import GlobalStyles from './styles/GlobalStyles'

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
)
root.render(
	// <React.StrictMode>
	<HashRouter>
		<Provider store={store}>
			<GlobalStyles />
			<App />
		</Provider>
	</HashRouter>
	// </React.StrictMode>
)

reportWebVitals()