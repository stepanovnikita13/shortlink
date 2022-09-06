import { Link, Container } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "../../hooks/hooks"
import { logout } from "../../redux/slices/authSlice"
import { Nav } from "./Header.styled"

export interface IHeaderProps {
}

const Header: React.FC<IHeaderProps> = (props) => {
	const isAuth = useSelector(state => state.auth.isAuth)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	return (
		<header>
			<Container>
				<Nav>
					<Link onClick={() => navigate('/')}>
						Get Link
					</Link>
					{isAuth
						? <>
							<Link onClick={() => navigate('statistics')}>
								Statistics
							</Link>
							<Link onClick={() => dispatch(logout())}>
								Logout
							</Link>
						</>
						: <Link onClick={() => navigate('login')}>
							Login
						</Link>
					}
				</Nav>
			</Container>
		</header >
	)
}

export default Header