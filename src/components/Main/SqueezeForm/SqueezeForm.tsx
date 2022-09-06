import { Form } from "./SqueezeForm.styled"
import { Button, InputBase, Paper } from '@mui/material'
import { SubmitHandler, useForm } from "react-hook-form"

export type TFormData = {
	targetLink: string
}
export interface ISqueezeFormProps {
	onSubmit: SubmitHandler<TFormData>
}

const SqueezeForm: React.FC<ISqueezeFormProps> = (props) => {
	const { onSubmit } = props
	const { register, handleSubmit } = useForm<TFormData>()

	return (
		<Paper
			sx={{ pl: 1 }}
		>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<InputBase
					id='target-link'
					fullWidth
					placeholder='http://example.com'
					sx={{ p: '6px' }}
					{...register('targetLink')}
				/>
				<Button
					type='submit'
					color='primary'
					variant='contained'
					sx={{ paddingInline: 4 }}
				>
					squeeze
				</Button>
			</Form>
		</Paper>
	)
}

export default SqueezeForm