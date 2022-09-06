import { Paper, TableCell, TableContainer, TableRow, TableFooter, Link } from '@mui/material'

import { useMediaQuery } from '@mui/material'
import device from '../../../styles/device'
import { ILinkStatistics, TOrderBy, TOrderType } from '../../../types/types'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import * as S from './TableStats.styled'
import React from 'react'
import EnhancedTableHead from './EnhancedTableHead/EnhancedTableHead'
import TableToolbar from './TableToolbar/TableToolbar'

export interface ITableStatsProps {
	rows: Array<ILinkStatistics | null>
	page: number
	rowsPerPage: number
	totalCount: number
	orderType: TOrderType
	orderBy: TOrderBy
	onPageChange: (e: React.MouseEvent<HTMLButtonElement> | null, page: number) => void
	onRowsPerPageChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	onCopy?: () => void
	onSortRequest: (e: React.MouseEvent<unknown>, value: TOrderBy) => void
}

const TableStats: React.FC<ITableStatsProps> = React.memo((props) => {
	const { rows, page, totalCount, rowsPerPage, onPageChange, orderType, orderBy, onRowsPerPageChange, onCopy, onSortRequest } = props
	const isMobile = !useMediaQuery(device.tabletS)

	return (
		<>
			<TableContainer
				component={isMobile ? 'div' : Paper}
				sx={{ paddingInline: isMobile ? '2px' : 0 }}
			>
				<TableToolbar />
				<S.Table size='small'>
					<EnhancedTableHead
						orderType={orderType}
						orderBy={orderBy}
						onRequestSort={onSortRequest}
					/>
					<S.TableBody>
						{rows.map(row => (
							<CopyToClipboard
								key={row?.id}
								text={`http://79.143.31.216/s/${row?.short}`}
								onCopy={onCopy}
							>
								<TableRow
									hover
									sx={{ '&:last-child td, &:last-child th': { border: 0 }, '&:hover': { cursor: 'pointer' } }}
								>
									<TableCell sx={{ wordWrap: 'break-word' }} component='th'>
										{isMobile && <S.RowHeading>TARGET</S.RowHeading>}
										<S.RowContent><Link target='_blank' href={row?.target} >{row?.target}</Link></S.RowContent>
									</TableCell>
									<TableCell >
										{isMobile && <S.RowHeading>SHORT</S.RowHeading>}
										<S.RowContent ><Link target='_blank' href={`http://79.143.31.216/s/${row?.short}`} >{row?.short}</Link></S.RowContent>
									</TableCell>
									<TableCell >
										{isMobile && <S.RowHeading>COUNTER</S.RowHeading>}
										<S.RowContent>{row?.counter}</S.RowContent>
									</TableCell>
								</TableRow>
							</CopyToClipboard>
						))}
					</S.TableBody>
					<TableFooter>
						<TableRow>
							<S.TablePagination
								count={totalCount}
								page={page}
								rowsPerPage={rowsPerPage}
								rowsPerPageOptions={[10, 20, 30]}
								labelDisplayedRows={({ from, to, count }) => `${from}-${to} of ${count !== -1 ? count : '?'}`}
								labelRowsPerPage='Portion'
								onPageChange={onPageChange}
								onRowsPerPageChange={onRowsPerPageChange}
								sx={{ flexWrap: 'wrap' }}
							/>
						</TableRow>
					</TableFooter>
				</S.Table>
			</TableContainer>
		</ >
	)
})

export default TableStats