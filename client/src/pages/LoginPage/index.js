import LoginForm from '../../components/LoginForm';
import Logo from '../../components/Logo';
import NavBar1 from '../../components/navbar1';

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
