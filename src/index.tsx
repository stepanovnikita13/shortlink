import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import './styles/null.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
)
root.render(
	//<React.StrictMode>
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
	//</React.StrictMode>
)

reportWebVitals()