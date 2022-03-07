import LoginForm from '../../components/LoginForm';
import NavBar1 from '../../components/NavBar1';
import Logo from '../../components/Logo';


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
