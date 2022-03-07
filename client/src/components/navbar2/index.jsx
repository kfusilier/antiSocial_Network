import { NavLink } from 'react-router-dom';
import style from './navBar2.module.css';
import { useNavigate } from 'react-router-dom';
import * as authService from "../../api/auth.service"

export default function NavBar2() {
	const navigate = useNavigate();
	const logOut = async () => {
		await authService.logout().then(() => {
		  navigate("/login");
		})
	  }

	return (
		<>
			<div className={style.navBar}>
				{/* <a href="/">Home</<a> essentially. We can inline style Link!
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link> */}
				{/* NavLink is helpful when differentiating between nav links and regular links. It also automatically assigns an "isActive" class that makes it easier to style! */}
				<NavLink
					to='/SignupPage'
					style={({ isActive }) => ({
						color: isActive ? '#37ecba' : 'white',
						textDecoration: 'none',
						padding: '10px',
					})}>
					SignUp
				</NavLink>
				<NavLink
					to='/LoginPage'
					style={({ isActive }) => ({
						color: isActive ? '#37ecba' : 'white',
						textDecoration: 'none',
					})}>
					Login
				</NavLink>
				<NavLink
					to='/BrowsePage'
					style={({ isActive }) => ({
						color: isActive ? '#37ecba' : 'white',
						textDecoration: 'none',
						padding: '5px',
					})}>
					Browse
				</NavLink>
				<NavLink
					to='/ProfilePage'
					style={({ isActive }) => ({
						color: isActive ? '#37ecba' : 'white',
						textDecoration: 'none',
						padding: '5px',
					})}>
					Profile
				</NavLink>
				<NavLink
					to='/UsersPage'
					style={({ isActive }) => ({
						color: isActive ? '#37ecba' : 'white',
						textDecoration: 'none',
						padding: '5px',
					})}>
					User List
				</NavLink>
				<NavLink
					to='/LoginPage'
					onClick={logOut}
					style={({ isActive }) => ({
						color: 'white',
						textDecoration: 'none',
						padding: '5px',
					})}>
					Log Out
				</NavLink>
				<NavLink
					to='/DeletePage'
					style={({ isActive }) => ({
						color: isActive ? '#37ecba' : 'white',
						textDecoration: 'none',
						padding: '5px',
					})}>
					Delete Profile
				</NavLink>
			</div>
		</>
	);
}
