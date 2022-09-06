import { Container } from "@mui/system"
import { useEffect } from "react"
import { SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "../../hooks/hooks"
import { register } from "../../redux/slices/authSlice"
import { FormInputs } from "../../types/types"
import AuthForm from "../common/AuthForm/AuthForm"

export interface IRegisterProps {
}

const Register: React.FC<IRegisterProps> = (props) => {
	const dispatch = useDispatch()

	useEffect(() => {
		document.title = 'Register'
	}, [])

	const onSubmit: SubmitHandler<FormInputs> = data => dispatch(register(data))

	return (
		<Container maxWidth='xs' >
			<AuthForm
				type='register'
				onSubmit={onSubmit}
			/>
		</Container>
	)
}

export default Register