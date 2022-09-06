import { TOrderType } from "../../../../types/types"
import { TableCell, TableRow, TableSortLabel } from '@mui/material'
import * as S from '../TableStats.styled'

export interface IHeadCellData {
	target: string
	short: string
	counter: number
}
export interface IHeadCell {
	id: keyof IHeadCellData
	label: string
}
const headCells: readonly IHeadCell[] = [
	{
		id: 'target',
		label: 'TARGET',
	},
	{
		id: 'short',
		label: 'SHORT',
	},
	{
		id: 'counter',
		label: 'COUNTER',
	}
]
export interface IEnhancedTableHead {
	orderBy: keyof IHeadCellData
	orderType: TOrderType
	onRequestSort: (e: React.MouseEvent<unknown>, value: keyof IHeadCellData) => void
}

const EnhancedTableHead: React.FC<IEnhancedTableHead> = (props) => {
	const { orderBy, orderType, onRequestSort } = props

	const createSortHandler = (value: keyof IHeadCellData) => (e: React.MouseEvent<unknown>) => {
		onRequestSort(e, value)
	}
	return (
		<S.TableHead>
			<TableRow>
				{headCells.map((headCell, index) => (
					<TableCell
						key={index}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? orderType : 'asc'}
							onClick={createSortHandler(headCell.id)}
						>
							{headCell.label}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</S.TableHead>
	)
}

export default EnhancedTableHead