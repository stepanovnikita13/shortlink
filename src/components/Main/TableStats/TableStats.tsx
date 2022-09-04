import { Paper, TableCell, TableContainer, TableRow, TableFooter, Link, Tooltip } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import device from '../../../styles/device'
import { ILinkStatistics } from '../../../types/types'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import * as S from './TableStats.styled'
import React from 'react'

export interface IEnhancedTableHead {

}
const EnhancedTableHead: React.FC<IEnhancedTableHead> = (props) => {
	return (
		<S.TableHead>
			<TableRow>
				<TableCell width='100%' >TARGET</TableCell>
				<TableCell width='100px' >SHORT</TableCell>
				<TableCell width='100px' >COUNT</TableCell>
			</TableRow>
		</S.TableHead>
	)
}

export interface ITableStatsProps {
	rows: Array<ILinkStatistics | null>
	page: number,
	rowsPerPage: number,
	totalCount: number,
	onPageChange: (e: React.MouseEvent<HTMLButtonElement> | null, page: number) => void
	onRowsPerPageChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	onCopy?: () => void
}

const TableStats: React.FC<ITableStatsProps> = React.memo((props) => {
	const { rows, page, totalCount, rowsPerPage, onPageChange, onRowsPerPageChange, onCopy } = props
	const isMobile = !useMediaQuery(device.tabletS)

	return (
		<>
			<TableContainer
				component={isMobile ? 'div' : Paper}
				sx={{ paddingInline: isMobile ? '2px' : 0 }}
			>
				<S.Table size='small'>
					<EnhancedTableHead />
					<S.TableBody>
						{rows.map(row => (
							<CopyToClipboard
								key={row?.id}
								text={row?.short as string}
								onCopy={onCopy}
							>
								<Tooltip title='Click to copy' enterDelay={1500} >
									<TableRow
										hover
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
									>
										<TableCell sx={{ wordWrap: 'break-word' }} component='th'>
											{isMobile && <S.RowHeading>TARGET</S.RowHeading>}
											<S.RowContent><Link target='_blank' href={row?.target} >{row?.target}</Link></S.RowContent>
										</TableCell>
										<TableCell >
											{isMobile && <S.RowHeading>SHORT</S.RowHeading>}
											<S.RowContent >{row?.short}</S.RowContent>
										</TableCell>
										<TableCell >
											{isMobile && <S.RowHeading>COUNTER</S.RowHeading>}
											<S.RowContent>{row?.counter}</S.RowContent>
										</TableCell>
									</TableRow>
								</Tooltip>
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