import { useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import NotFound from "./components/NotFound/NotFound";
import Register from "./components/Register/Register";
import { useDispatch, useSelector } from "./hooks/hooks";
import { authMe } from "./redux/slices/authSlice";

const App: React.FC = () => {
	const initialized = useSelector(state => state.auth.initialized)
	const dispatch = useDispatch()
	useEffect(() => {
		if (!initialized) {
			dispatch(authMe())
		}
	}, [initialized, dispatch])

	if (!initialized) return null
	return (
		<Routes>
			<Route path='/' element={<Layout />} >
				<Route index element={<Main />} />
				<Route path='login' element={<Login />} />
				<Route path='register' element={<Register />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	)
}

function Layout() {
	return (
		<div>
			<Header />
			<main>
				<Outlet />
			</main>
		</div>
	)
}

export default App;
