// import { useState, useEffect } from 'react';
// import Post from '../../components/Post';
// import Welcome from '../../components/Welcome';
// import PostForm from '../../components/PostForm';
// import UsersPage from '../UsersPage';
import NavBar1 from '../../components/NavBar1';
import { Routes, Route } from 'react-router-dom';
import style from './landing.module.css';
import Signup from '../SignupPage';
import SignUpIcon from '../../components/NavBarIcons/SignUp.index';
import Login from '../LoginPage';
import LogInIcon from '../../components/NavBarIcons/LogIn.index';

const Home = () => {
	return (
		<>
			<div>
				<NavBar1 />
				<Routes>
					<Route path='/SignupPage' element={<Signup />}></Route>
					<Route path='/LoginPage' element={<Login />}></Route>
				</Routes>
			</div>

			<div className={style.homeBrand}>
				<div id={style.homeLogo}>
					<p>antiSocial</p>
				</div>
				<div id={style.homeBlurb}>
					<p>a place to be alone, together.</p>
				</div>
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
