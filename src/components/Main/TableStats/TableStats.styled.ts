import {
	Table as TableMUI,
	TableHead as TableHeadMUI,
	TableBody as TableBodyMUI,
	TablePagination as TablePaginationMUI
} from '@mui/material'
import { styled } from '@mui/material/styles'
import device from '../../../styles/device'

export const Table = styled(TableMUI)({
	tableLayout: 'fixed',
	width: '100%',
	borderCollapse: 'separate',
	borderSpacing: '0px 20px',
	'& td, & th': {
		display: 'block',
		border: 0,
		position: 'relative',
	},
	[`@media ${device.tabletS}`]: {
		borderSpacing: 0,
		'& td, & th': {
			display: 'table-cell',
			borderBottom: '1px solid rgba(224, 224, 224, 1)'
		},
	}
})

export const TableBody = styled(TableBodyMUI)({
	'& tr': {
		borderRadius: 4,
		boxShadow: [
			'0px 2px 1px -1px rgb(0 0 0 / 20%)',
			'0px 1px 1px 0px rgb(0 0 0 / 14%)',
			'0px 1px 3px 0px rgb(0 0 0 / 12%)'
		].join(',')
	},
	[`@media ${device.tabletS}`]: {
		'& tr': {
			boxShadow: 'none'
		},
	}
})

export const TableHead = styled(TableHeadMUI)({
	display: 'none',
	[`@media ${device.tabletS}`]: {
		display: 'table-header-group'
	}
})

export const RowHeading = styled('div')(({ theme }) => ({
	position: 'absolute',
	insetBlock: 0,
	left: 0,
	width: 90,
	display: 'flex',
	backgroundColor: theme.palette.grey[100],
	paddingLeft: '8px',
	paddingTop: '6px',
}))

export const RowContent = styled('span')({
	display: 'block',
	marginLeft: '83px',
	[`@media ${device.tabletS}`]: {
		margin: 0
	}
})

export const TablePagination = styled(TablePaginationMUI)({
	'& .MuiTablePagination-selectLabel': {
		width: 0,
		whiteSpace: 'nowrap',
		transform: 'translateY(-19px)',
		[`@media ${device.tabletS}`]: {
			width: 'auto',
			transform: 'none'
		}
	}
})