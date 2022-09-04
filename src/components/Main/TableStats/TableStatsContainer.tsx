import { forwardRef, useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from '../../../hooks/hooks'
import { requestStats, setCurrentPage, setOrder, setPageSize } from '../../../redux/slices/mainSlice'
import TableStats from './TableStats'
import Snackbar from '@mui/material/Snackbar'
import LinearProgress from '@mui/material/LinearProgress'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { useMediaQuery } from '@mui/material'
import { scrollToTop } from '../../../utils/helpers'
import device from '../../../styles/device'
import { TOrder, TOrderBy, TOrderType } from '../../../types/types'

export interface ITableStatsContainerProps {
}

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
	<MuiAlert ref={ref} variant='filled' elevation={6} {...props} />
))

const TableStatsContainer: React.FC<ITableStatsContainerProps> = (props) => {
	const { currentPage, pageSize, statistics, totalCount, isFetching, order } = useSelector(state => state.main)
	const dispatch = useDispatch()
	const isMobile = !useMediaQuery(device.tabletS)
	const [isSnackBarOpen, setOpenSnackBar] = useState<boolean>(false)
	const [orderType, orderBy] = order.split('_') as [TOrderType, TOrderBy]

	useEffect(() => {
		dispatch(requestStats({ currentPage, pageSize, order }))
	}, [dispatch, currentPage, pageSize, order])
	useEffect(() => {
		if (isMobile) scrollToTop()
	}, [currentPage, isMobile])

	const handlerPageChange = useCallback((e: unknown, newPage: number) => {
		dispatch(setCurrentPage(newPage))
	}, [dispatch])

	const handlerRowsPerPageChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setPageSize(+e.target.value))
		dispatch(setCurrentPage(0))
	}, [dispatch])

	function handlerSnackbarClose(e?: React.SyntheticEvent | Event, reason?: string) {
		if (reason === 'clickaway') return
		setOpenSnackBar(false)
	}

	const handlerCopy = useCallback(() => {
		setOpenSnackBar(true)
	}, [])

	const handlerRequestSort = useCallback((e: React.MouseEvent<unknown>, value: TOrderBy) => {
		const isAsc = orderBy === value && orderType === 'asc'
		const newOrder = isAsc ? 'desc' : 'asc'
		const newOrderBy = value
		dispatch(setOrder([newOrder, newOrderBy].join('_') as TOrder))
	}, [orderType, orderBy, dispatch])

	return (
		<>
			{isFetching && <LinearProgress />}
			<TableStats
				rows={statistics}
				page={currentPage}
				rowsPerPage={pageSize}
				totalCount={totalCount}
				orderType={orderType}
				orderBy={orderBy}
				onPageChange={handlerPageChange}
				onRowsPerPageChange={handlerRowsPerPageChange}
				onCopy={handlerCopy}
				onSortRequest={handlerRequestSort}
			/>
			<Snackbar open={isSnackBarOpen} autoHideDuration={3000} onClose={handlerSnackbarClose}>
				<Alert severity='success' onClose={handlerSnackbarClose}>
					Short link successfully copied to clipboard
				</Alert>
			</Snackbar>
		</>
	)
}

export default TableStatsContainer