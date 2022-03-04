import { NavLink, Link } from 'react-router-dom';
import SignUpIcon from '../NavBarIcons/SignUp.index';
import UserDropMenuIcon from '../NavBarIcons/UserDropMenu.index';
import style from './navBar.module.css';

export default function NavBar1() {
	return (
		<>
			<div className='nav'>
				{/* <a href="/">Home</<a> essentially. We can inline style Link!
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link> */}
				{/* NavLink is helpful when differentiating between nav links and regular links. It also automatically assigns an "isActive" class that makes it easier to style! */}
				<NavLink
					to='/SignupPage'
					style={({ isActive }) => ({
						color: isActive ? 'green' : 'blue',
					})}>
					SignUp
				</NavLink>

				<NavLink
					to='/LoginPage'
					style={({ isActive }) => ({
						color: isActive ? 'green' : 'blue',
					})}>
					Login
				</NavLink>
			</div>
		</>
	);
}
