// import { useState, useEffect } from 'react';
// import Post from '../../components/Post';
// import Welcome from '../../components/Welcome';
// import PostForm from '../../components/PostForm';
import NavBar1 from '../../components/navbar1';
// import UsersPage from '../UsersPage';
// import { Routes, Route } from 'react-router-dom';
import Landing from '../../components/Landing';
import LoginForm from '../../components/loginForm';
import CreateUser from '../../components/CreateUser';

const Home = () => {
	return (
		<div>
			<NavBar1 />
			<Landing />
			<LoginForm />
			<CreateUser />
		</div>
	);
};

export default Home;

// <Routes>
// 	<Route path='LoginPage' element={<LogInTest />}></Route>
// </Routes>;
