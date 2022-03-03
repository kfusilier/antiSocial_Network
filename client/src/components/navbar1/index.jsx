// import { NavLink, Link } from 'react-router-dom';

import { LogInIcon } from '../NavBarIcons/LogIn.index'; // , LogInButton
import SignUpIcon from '../NavBarIcons/SignUp.index';

export default function NavBar1() {
	return (
		<>
			<div className='nav'>
				<SignUpIcon />
				<LogInIcon />
			</div>
		</>
	);
}
