import LoginForm from '../../components/loginForm';
import NavBar1 from '../../components/NavBar1';
// import { Routes, Route } from 'react-router-dom';

const Login = () => {
	return (
		<div>
			<LoginForm />
			<NavBar1 />
		</div>
	);
};

export default Login;

// <Routes>
// 	<Route path='LoginPage' element={<LogInTest />}></Route>
// </Routes>;
