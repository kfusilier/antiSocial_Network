import { NavLink } from 'react-router-dom';
import style from './navBar.module.css';

export default function NavBar1() {
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
				<NavLink to='/ProfilePage' style={({ isActive }) => ({color: isActive ? 'green' : 'blue',})}>Profile</NavLink>
				<NavLink to='/BrowsePage' style={({ isActive }) => ({color: isActive ? 'green' : 'blue',})}>Browse</NavLink>
				<NavLink to='/UsersPage' style={({ isActive }) => ({color: isActive ? 'green' : 'blue',})}>Users</NavLink>
			</div>
		</>
	);
}
