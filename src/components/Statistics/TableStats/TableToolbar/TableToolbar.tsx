import SortIcon from '@mui/icons-material/Sort'
import { Toolbar, Typography, IconButton, Tooltip, Menu, MenuItem } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import device from '../../../../styles/device'
import { TOrder, TOrderType } from '../../../../types/types'
import { useState } from 'react'
import { useDispatch } from '../../../../hooks/hooks'
import { setOrder } from '../../../../redux/slices/statsSlice'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

export type IMenuOption = {
	[index in TOrder]: string
}
const options: IMenuOption = {
	asc_target: 'Target link',
	desc_target: 'Target link',
	asc_short: 'Short link',
	desc_short: 'Short link',
	asc_counter: 'Counter',
	desc_counter: 'Counter'
}

export interface ISortMenuProps {
	open: boolean
	anchorEl: HTMLElement | null
	onClose: () => void
	onSortSelect: (value: TOrder) => void
}

const SortMenu: React.FC<ISortMenuProps> = (props) => {
	const { anchorEl, open, onClose, onSortSelect } = props
	const [selectedIndex, setSelectedIndex] = useState<number>(0)

	const handlerMenuItemClick = (e: React.MouseEvent<HTMLElement>, index: number, order: TOrder) => {
		setSelectedIndex(index)
		onSortSelect(order)
		onClose()
	}
	return (
		<Menu
			open={open}
			anchorEl={anchorEl}
			onClose={onClose}
		>
			{Object.entries(options).map((option, index) => {
				const orderType = option[0].split('_')[0] as TOrderType
				return (
					<MenuItem
						key={index}
						selected={index === selectedIndex}
						onClick={(e) => handlerMenuItemClick(e, index, option[0] as TOrder)}
					>
						{option[1]}<ArrowDownwardIcon
							sx={{
								rotate: orderType === 'asc' ? '180deg' : null,
								color: 'GrayText'
							}} />
					</MenuItem>
				)
			})}
		</Menu>
	)
}

export interface ITableToolbarProps {
}

const TableToolbar: React.FC<ITableToolbarProps> = (props) => {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
	const isMenuOpen = Boolean(anchorEl)
	const isMobile = !useMediaQuery(device.tabletS)
	const dispatch = useDispatch()

	const handlerSortButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(e.currentTarget)
	}
	const handlerMenuClose = () => {
		setAnchorEl(null)
	}
	const handlerSortSelect = (order: TOrder) => {
		dispatch(setOrder(order))
	}
	return (
		<Toolbar disableGutters={isMobile} >
			<Typography variant='h5' sx={{ flex: '1 1 100%' }} >Statistics</Typography>
			<Tooltip title='Sort table' >
				<IconButton
					onClick={handlerSortButtonClick}
				>
					<SortIcon />
				</IconButton>
			</Tooltip>
			<SortMenu
				open={isMenuOpen}
				onClose={handlerMenuClose}
				onSortSelect={handlerSortSelect}
				anchorEl={anchorEl}
			/>
		</Toolbar>
	)
}

export default TableToolbar