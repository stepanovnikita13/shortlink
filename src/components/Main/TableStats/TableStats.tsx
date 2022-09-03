import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from '@mui/material'
import { ILinkStatistics } from '../../../types/types'

export interface ITableStatsProps {
	rows: Array<ILinkStatistics | null>
	page: number,
	rowsPerPage: number,
	onPageChange: (e: React.MouseEvent<HTMLButtonElement> | null, page: number) => void
	onRowsPerPageChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TableStats: React.FC<ITableStatsProps> = (props) => {
	const { rows, page, rowsPerPage, onPageChange, onRowsPerPageChange } = props
	return (
		<>
			<TableContainer component={Paper} >
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Target Link</TableCell>
							<TableCell>Short Link</TableCell>
							<TableCell>Following count</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map(row => (
							<TableRow
								key={row?.id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component='th'>{row?.target}</TableCell>
								<TableCell >{row?.short}</TableCell>
								<TableCell >{row?.counter}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				component='div'
				count={-1}
				page={page}
				rowsPerPage={rowsPerPage}
				rowsPerPageOptions={[10, 20, 30]}
				onPageChange={onPageChange}
				onRowsPerPageChange={onRowsPerPageChange}
			/>
		</ >
	)
}

export default TableStats