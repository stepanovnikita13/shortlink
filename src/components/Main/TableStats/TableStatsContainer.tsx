import { useEffect } from 'react'
import { useDispatch, useSelector } from '../../../hooks/hooks'
import { requestStats, setCurrentPage, setPageSize } from '../../../redux/slices/mainSlice'
import TableStats from './TableStats'

export interface ITableStatsContainerProps {
}

const TableStatsContainer: React.FC<ITableStatsContainerProps> = (props) => {
	const { currentPage, pageSize, statistics } = useSelector(state => state.main)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(requestStats({ currentPage, pageSize }))
	}, [dispatch, currentPage, pageSize])

	const handlerPageChange = (e: unknown, newPage: number) => {
		dispatch(setCurrentPage(newPage))
	}

	const handlerRowsPerPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setPageSize(+e.target.value))
		dispatch(setCurrentPage(0))
	}

	return (
		<TableStats
			rows={statistics}
			page={currentPage}
			rowsPerPage={pageSize}
			onPageChange={handlerPageChange}
			onRowsPerPageChange={handlerRowsPerPageChange}
		/>
	)
}

export default TableStatsContainer