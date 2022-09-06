import { useEffect, useState, useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from '../../../hooks/hooks'
import { requestStats, setCurrentPage, setPageSize } from '../../../redux/slices/statsSlice'
import TableStats from './TableStats'
import { Alert, LinearProgress, Snackbar } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { scrollToTop } from '../../../utils/helpers'
import device from '../../../styles/device'
import { ILinkStatistics, TOrderBy, TOrderType } from '../../../types/types'

export interface ITableStatsContainerProps {
}

const TableStatsContainer: React.FC<ITableStatsContainerProps> = (props) => {
	const { currentPage, pageSize, statistics, totalCount, isFetching, order } = useSelector(state => state.stats)
	const dispatch = useDispatch()
	const isMobile = !useMediaQuery(device.tabletS)
	const [isSnackBarOpen, setOpenSnackBar] = useState<boolean>(false)
	const [orderBy, setOrderBy] = useState<TOrderBy>('target')
	const [orderType, setOrderType] = useState<TOrderType>('asc')

	const sortingRows = useMemo(() => {
		function getComparator(orderType: TOrderType, orderBy: TOrderBy):
			(a: ILinkStatistics, b: ILinkStatistics) => number {
			return orderType === 'asc'
				? (a, b) => compare(a, b, orderBy)
				: (a, b) => -compare(a, b, orderBy)
		}

		return statistics.length > 0 ? statistics.slice().sort(getComparator(orderType, orderBy)) : []
	}, [orderType, orderBy, statistics])

	useEffect(() => {
		dispatch(requestStats({ currentPage, pageSize, order }))
	}, [dispatch, currentPage, pageSize, order])

	useEffect(() => {
		if (isMobile) scrollToTop()
	}, [currentPage, isMobile])

	function compare<T>(a: T, b: T, orderBy: keyof T) {
		if (a[orderBy] < b[orderBy]) return -1
		if (a[orderBy] > b[orderBy]) return 1
		return 0
	}

	const handlerPageChange = useCallback((e: unknown, newPage: number) => {
		dispatch(setCurrentPage(newPage))
	}, [dispatch])

	const handlerRowsPerPageChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setPageSize(+e.target.value))
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
		const newOrderType = isAsc ? 'desc' : 'asc'
		const newOrderBy = value
		setOrderBy(newOrderBy)
		setOrderType(newOrderType)
	}, [orderType, orderBy])

	return (
		<>
			{isFetching && <LinearProgress />}
			<TableStats
				rows={sortingRows}
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