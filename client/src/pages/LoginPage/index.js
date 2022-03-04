import LoginForm from '../../components/LoginForm';
import NavBar1 from '../../components/NavBar1';
// import { Routes, Route } from 'react-router-dom';

const Login = () => {
	return (
		<div>
			<NavBar1 />
			<LoginForm />
		</div>
	);
};

export default Login;

// <Routes>
// 	<Route path='LoginPage' element={<LogInTest />}></Route>
// </Routes>;
