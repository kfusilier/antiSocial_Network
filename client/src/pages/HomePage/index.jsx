// import { useState, useEffect } from 'react';
// import Post from '../../components/Post';
// import Welcome from '../../components/Welcome';
// import PostForm from '../../components/PostForm';
// import UsersPage from '../UsersPage';
import NavBar1 from '../../components/NavBar1';
import { Routes, Route } from 'react-router-dom';
import Signup from '../SignupPage';
import Login from '../LoginPage';
import Landing from '../../components/Landing';

const Home = () => {
	return (
		<>
			<div>
				<NavBar1 />
				<Routes>
					<Route path='/SignupPage' element={<Signup />}></Route>

					<Route path='/LoginPage' element={<Login />}></Route>

					<Route path='/' element={<Landing />}></Route>
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
