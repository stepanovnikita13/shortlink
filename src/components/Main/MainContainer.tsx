import { Container, Snackbar, Alert } from '@mui/material'
import { useState } from 'react'
import Main from './Main'

export interface IMainContainerProps {
}

const MainContainer: React.FC<IMainContainerProps> = (props) => {
	const [isSnackbarOpen, setOpenSnackbar] = useState<boolean>(false)

	function handlerSnackbarClose(e?: React.SyntheticEvent | Event, reason?: string) {
		if (reason === 'clickaway') return
		setOpenSnackbar(false)
	}
	function handlerOpenSnackbar() {
		setOpenSnackbar(true)
	}
	return (
		<>
			<Container maxWidth='md' >
				<Main onCopy={handlerOpenSnackbar} />
			</Container>
			<Snackbar open={isSnackbarOpen} autoHideDuration={3000} onClose={handlerSnackbarClose}>
				<Alert severity='success' onClose={handlerSnackbarClose}>
					Short link successfully copied to clipboard
				</Alert>
			</Snackbar>
		</>
	)
}

export default MainContainer