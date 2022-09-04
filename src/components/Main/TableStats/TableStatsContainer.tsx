import { forwardRef, useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from '../../../hooks/hooks'
import { requestStats, setCurrentPage, setPageSize } from '../../../redux/slices/mainSlice'
import TableStats from './TableStats'
import Snackbar from '@mui/material/Snackbar'
import LinearProgress from '@mui/material/LinearProgress'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { useMediaQuery } from '@mui/material'
import { scrollToTop } from '../../../utils/helpers'
import device from '../../../styles/device'

export interface ITableStatsContainerProps {
}

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
	<MuiAlert ref={ref} variant='filled' elevation={6} {...props} />
))

const TableStatsContainer: React.FC<ITableStatsContainerProps> = (props) => {
	const { currentPage, pageSize, statistics, totalCount, isFetching } = useSelector(state => state.main)
	const dispatch = useDispatch()
	const isMobile = !useMediaQuery(device.tabletS)
	const [isSnackBarOpen, setOpenSnackBar] = useState<boolean>(false)

	useEffect(() => {
		dispatch(requestStats({ currentPage, pageSize }))
	}, [dispatch, currentPage, pageSize])
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

	return (
		<>
			{isFetching && <LinearProgress />}
			<TableStats
				rows={statistics}
				page={currentPage}
				rowsPerPage={pageSize}
				totalCount={totalCount}
				onPageChange={handlerPageChange}
				onRowsPerPageChange={handlerRowsPerPageChange}
				onCopy={handlerCopy}
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