import { NavLink, Link } from 'react-router-dom';

export default function NavBar2() {
	return (
		<>
			<div>
				{/* <a href="/">Home</<a> essentially. We can inline style Link!
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link> */}
				<NavLink
					to='./SignupPage'
					style={({ isActive }) => ({
						color: isActive ? 'green' : 'blue',
					})}>
					User Nav
				</NavLink>
			</div>
		</>
	);
}
