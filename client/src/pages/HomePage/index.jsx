// import { useState, useEffect } from 'react';
// import Post from '../../components/Post';
// import Welcome from '../../components/Welcome';
// import PostForm from '../../components/PostForm';
import NavBar1 from '../../components/NavBar1';
// import UsersPage from '../UsersPage';
import { Routes, Route } from 'react-router-dom';
import Signup from '../SignupPage';
import Login from '../LoginPage'
import style from "./landing.module.css"
import SignUpIcon from '../../components/NavBarIcons/SignUp.index';

const Home = () => {
	return (
		<>
		<div>
		<NavBar1 />
		<Routes>
			<Route path ='/SignupPage' element = {<Signup />}></Route>
			<Route path ='/LoginPage' element = {<Login />}></Route>
		</Routes>
		</div>

		<div className={style.homeBrand}>
			<div id={style.homeLogo}>
				<p>antiSocial</p>
			</div>
			<div id={style.homeBlurb}>
				<p>a place to be alone, together.</p>
			</div>
			<SignUpIcon />
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
