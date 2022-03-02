import loginForm from '../../components/login_form';
import NavBar1 from '../../components/navbar1';
// import { Routes, Route } from 'react-router-dom';

const Login = () => {
	return (
		<div>
			<NavBar1 />
			<loginForm />
		</div>
	);
};

export default Login;

// <Routes>
// 	<Route path='LoginPage' element={<LogInTest />}></Route>
// </Routes>;
