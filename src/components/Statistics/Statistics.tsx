import { Container } from '@mui/system'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from '../../hooks/hooks'
import TableStatsContainer from './TableStats/TableStatsContainer'

export interface IStatisticsProps {
}

const Statistics: React.FC<IStatisticsProps> = (props) => {
	const navigate = useNavigate()
	const isAuth = useSelector(state => state.auth.isAuth)

	useEffect(() => {
		if (!isAuth) navigate('/login')
	}, [isAuth, navigate])

	return (
		<Container maxWidth='md' >
			<TableStatsContainer />
		</Container>
	)
}

export default Statistics