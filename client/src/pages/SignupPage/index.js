import Logo from '../../components/Logo';
import NavBar1 from '../../components/NavBar1';

import SignupForm from '../../components/SignupForm';
// import { Routes, Route } from 'react-router-dom';

const Signup = () => {
	return (
		<div>
			<NavBar1 />
			<div>
				<Logo />
				<SignupForm />
			</div>
		</div>
	);
};

export default Signup;

// <Routes>
// 	<Route path='LoginPage' element={<LogInTest />}></Route>
// </Routes>;
