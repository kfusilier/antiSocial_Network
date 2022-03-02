import { NavLink, Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<>
			<div>
				{/* <a href="/">Home</<a> essentially. We can inline style Link!
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link> */}
				{/* NavLink is helpful when differentiating between nav links and regular links. It also automatically assigns an "isActive" class that makes it easier to style! */}
				<NavLink
					to='/'
					style={({ isActive }) => ({
						color: isActive ? 'green' : 'blue',
					})}></NavLink>
				<NavLink
					to='/posts'
					style={({ isActive }) => ({
						color: isActive ? 'green' : 'blue',
					})}></NavLink>
				<NavLink to='./SignupPage'>Sign Up</NavLink>
				<NavLink to='./LoginPage'>Login</NavLink>
			</div>
		</>
	);
}
