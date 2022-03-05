import { NavLink } from 'react-router-dom';
import style from './navBar2.module.css';

export default function NavBar2() {
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
						padding: '5px',
					})}>
					Sign Up
				</NavLink>
				<NavLink
					to='/LoginPage'
					style={({ isActive }) => ({
						color: isActive ? '#37ecba' : 'white',
						textDecoration: 'none',
						padding: '5px',
					})}>
					Login
				</NavLink>
				<NavLink
					to='/SignupPage'
					style={({ isActive }) => ({
						color: isActive ? '#37ecba' : 'white',
						textDecoration: 'none',
						padding: '5px',
					})}>
					User Menu
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
					to='/UserPage'
					style={({ isActive }) => ({
						color: isActive ? '#37ecba' : 'white',
						textDecoration: 'none',
						padding: '5px',
					})}>
					User List
				</NavLink>
				<NavLink
					to='/LogoutPage'
					style={({ isActive }) => ({
						color: isActive ? '#37ecba' : 'white',
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
