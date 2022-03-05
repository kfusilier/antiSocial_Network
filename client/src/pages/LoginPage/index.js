import LoginForm from '../../components/LoginForm';
import Logo from '../../components/Logo';
// import { Routes, Route } from 'react-router-dom';

const Login = () => {
	return (
		<div>
			<Logo />
			<LoginForm />
		</div>
	);
};

export default Login;

// <Routes>
// 	<Route path='LoginPage' element={<LogInTest />}></Route>
// </Routes>;
