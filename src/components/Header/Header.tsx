import { Button } from "@mui/material"
import { useDispatch, useSelector } from "../../hooks/hooks"
import { logout } from "../../redux/slices/authSlice"

export interface IHeaderProps {
}

const Header: React.FC<IHeaderProps> = (props) => {
	const isAuth = useSelector(state => state.auth.isAuth)
	const dispatch = useDispatch()
	return (
		<header>
			{isAuth && <Button onClick={() => dispatch(logout())}>
				Logout
			</Button>}
		</header>
	)
}

export default Header