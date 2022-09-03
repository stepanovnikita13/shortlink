import { styled } from '@mui/material/styles'
import { NavLink as Link } from 'react-router-dom'

export const NavLink = styled(Link)({
	padding: '4px 3px',
	margin: '-4px -3px',
	'&:focus': {
		backgroundColor: 'rgb(25 118 210 / 30%)'
	}
})