import LoginForm from '../../components/LoginForm';
import Logo from '../../components/Logo';
import NavBar1 from '../../components/Navbar1';

// import { Routes, Route } from 'react-router-dom';

const Login = () => {
	return (
		<>
			<NavBar1 />
			<div>
				<Logo />
				<LoginForm />
			</div>
		</>
	);
};

export default Login;

// <Routes>
// 	<Route path='LoginPage' element={<LogInTest />}></Route>
// </Routes>;
