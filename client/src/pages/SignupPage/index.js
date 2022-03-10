import Logo from '../../components/Logo';
import NavBar1 from '../../components/Navbar1';
import SignupForm from '../../components/SignupForm';
// import { Routes, Route } from 'react-router-dom';

const Signup = () => {
	return (
		<>
			<NavBar1 />
			<div>
				<Logo />
				<SignupForm />
			</div>
		</>
	);
};

export default Signup;

// <Routes>
// 	<Route path='LoginPage' element={<LogInTest />}></Route>
// </Routes>;
