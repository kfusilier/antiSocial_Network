import { Routes, Route } from 'react-router-dom';
import Signup from '../SignupPage';
import Login from '../LoginPage';
import Landing from '../../components/Landing';
import NavBar1 from '../../components/NavBar1';
import ProfilePage from '../ProfilePage';
import BrowsePage from '../BrowsePage';
import UsersPage from '../UsersPage';


const Home = () => {
	return (
		<>
			<div>
				<NavBar1 />
				<Routes>
					<Route path='/SignupPage' element={<Signup />}></Route>
					<Route path='/LoginPage' element={<Login />}></Route>
					<Route path='/' element={<Landing />}></Route>
					<Route path='/ProfilePage' element={<ProfilePage />}></Route>
					<Route path='/BrowsePage' element={<BrowsePage />}></Route>
					<Route path='/UsersPage' element={<UsersPage />}></Route>

				</Routes>
			</div>
		</>
	);
};

export default Home;

// <Routes>
// 	<Route path='LoginPage' element={<LogInTest />}></Route>
// </Routes>;

// <LoginForm />
// <CreateUser />
