import { styled } from '@mui/material'

export const Nav = styled('nav')({
	display: 'flex',
	paddingBlock: 15,
	gap: 10,
	'&>a': {
		cursor: 'pointer',
	}
})