import { Typography, Link } from '@mui/material'
import CopyToClipboard from 'react-copy-to-clipboard'
import { SubmitHandler } from 'react-hook-form'
import { useDispatch, useSelector } from '../../hooks/hooks'
import { getShortLink } from '../../redux/slices/mainSlice'
import SqueezeForm, { TFormData } from './SqueezeForm/SqueezeForm'

export interface IMainProps {
	onCopy: () => void
}

const Main: React.FC<IMainProps> = (props) => {
	const { onCopy } = props
	const { shortLink, targetLink } = useSelector(state => state.main)
	const dispatch = useDispatch()

	const handlerSubmit: SubmitHandler<TFormData> = data => dispatch(getShortLink(data.targetLink))
	return (
		<div>
			<Typography variant='h4' textAlign='center'>
				Paste the URL
			</Typography>
			<SqueezeForm onSubmit={handlerSubmit} />

			{shortLink && <>
				<CopyToClipboard text={`http://79.143.31.216/s/${shortLink}`} onCopy={onCopy} >
					<Typography textAlign='center'>
						<Link sx={{ cursor: 'pointer' }} >
							{`http://79.143.31.216/s/${shortLink}`}
						</Link>
					</Typography>
				</CopyToClipboard>
				<Typography textAlign='center'>
					{'(click to copy)'}
				</Typography>
				<Typography textAlign='center' variant='caption' sx={{ wordBreak: 'break-all' }}>
					{targetLink}
				</Typography>
			</>}
		</div>
	)
}

export default Main