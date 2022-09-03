import { Container } from "@mui/system"
import { useEffect } from "react"
import { SubmitHandler } from "react-hook-form"
import { FormInputs } from "../../types/types"
import AuthForm from "../common/AuthForm/AuthForm"

export interface IRegisterProps {
}

const Register: React.FC<IRegisterProps> = (props) => {
	useEffect(() => {
		document.title = 'Register'
	}, [])

	const onSubmit: SubmitHandler<FormInputs> = data => console.log(data);

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