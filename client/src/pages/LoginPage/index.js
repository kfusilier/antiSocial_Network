import LoginForm from '../../components/LoginForm/index.jsx';
import Logo from '../../components/Logo/index.jsx';
import NavBar1 from '../../components/Navbar1/index.jsx';

// import { Routes, Route } from 'react-router-dom';

const Login = () => {
	return (
		<div>
			<NavBar1 />
			<div>
				<Logo />
				<LoginForm />
			</div>
		</div>
	);
};

export default Login;

{
	/*<Routes>
	<Route path='LoginPage' element={<LogInTest />}></Route>
</Routes>;  */
}
