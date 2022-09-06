import { Button, TextField, Typography } from "@mui/material"
import { SubmitHandler, useForm } from "react-hook-form"
import { NavLink } from "../Link/Link"

export interface IAuthFormProps {
	type: 'register' | 'login'
	onSubmit: SubmitHandler<FormInputs>
}

export type FormInputs = {
	username: string
	password: string
}

const content = {
	register: { name: 'Register', button: 'register', question: 'Already have an account?', link: 'Log in', url: 'login' },
	login: { name: 'Login', button: 'login', question: "Don't have an account?", link: 'Register', url: 'register' }
}

const AuthForm: React.FC<IAuthFormProps> = (props) => {
	const { type, onSubmit } = props

	const { register, handleSubmit } = useForm<FormInputs>({
		defaultValues: {
			username: '',
			password: ''
		}
	})

	return (
		<>
			<Typography variant='h2'>
				{content[type].name}
			</Typography>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField
					id='userName'
					variant='filled'
					label='Username'
					fullWidth
					margin='dense'
					autoComplete='username'
					{...register('username')}
				/>
				<TextField
					id='password'
					variant='filled'
					label='Password'
					type='password'
					fullWidth
					margin='dense'
					autoComplete='current-password'
					{...register('password')}
				/>
				<Button
					type='submit'
					fullWidth
					size='large'
					sx={{ height: 56, margin: '8px 0 4px' }}
				>{content[type].button}</Button>
			</form>
			<Typography textAlign='center' >
				{content[type].question}
				<NavLink to={`/${content[type].url}`} style={{ textDecoration: 'underline', marginLeft: 2 }} >
					{content[type].link}
				</NavLink>
			</Typography>
		</>
	)
}

export default AuthForm