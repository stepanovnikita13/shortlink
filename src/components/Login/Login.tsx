import { Container } from "@mui/system"
import { useEffect } from "react"
import { SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "../../hooks/hooks"
import { login } from "../../redux/slices/authSlice"
import { FormInputs } from "../../types/types"
import AuthForm from "../common/AuthForm/AuthForm"

export interface ILoginProps {
}

const Login: React.FC<ILoginProps> = (props) => {
	const dispatch = useDispatch()
	const { isAuth, username } = useSelector(state => state.auth)
	const navigate = useNavigate()

	useEffect(() => {
		if (isAuth) navigate('/')
	}, [isAuth, navigate])
	useEffect(() => {
		document.title = 'Login'
	}, [])

	const onSubmit: SubmitHandler<FormInputs> = data => dispatch(login(data))

	return (
		<Container maxWidth='xs' >
			<AuthForm
				type='login'
				onSubmit={onSubmit}
				defaultValues={{ username, password: '' }}
			/>
		</Container>
	)
}

export default Login