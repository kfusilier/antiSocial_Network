// import { useState, useEffect } from 'react';
// import Post from '../../components/Post';
// import Welcome from '../../components/Welcome';
// import PostForm from '../../components/PostForm';
// import UsersPage from '../UsersPage';
import NavBar1 from '../../components/NavBar1';
import { Routes, Route } from 'react-router-dom';
import Signup from '../SignupPage';
import SignUpIcon from '../../components/NavBarIcons/SignUp.index';
import Login from '../LoginPage';
import LogInIcon from '../../components/NavBarIcons/LogIn.index';
import Landing from '../../components/Landing';
import UserHomePageIcon from '../../components/NavBarIcons/UserHomePage.index';

const Home = () => {
	return (
		<>
			<div>
				<NavBar1 />
				<UserHomePageIcon />
				<Routes>
					<Route path='/' element={<Landing />}></Route>

					<Route path='/SignupPage' element={<Signup />}></Route>

					<Route path='/LoginPage' element={<Login />}></Route>
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
