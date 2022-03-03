// import { useState, useEffect } from 'react';
// import Post from '../../components/Post';
// import Welcome from '../../components/Welcome';
// import PostForm from '../../components/PostForm';
import NavBar1 from '../../components/NavBar1';
// import UsersPage from '../UsersPage';
// import { Routes, Route } from 'react-router-dom';
import Landing from '../../components/Landing';
// import LoginForm from '../../components/LoginForm';
// import CreateUser from '../../components/CreateUser';
import styled from 'styled-components';

const Text = styled.div`
	background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);
`;

const Home = () => {
	return (
		<div>
			<NavBar1 />
			<Landing />
		</div>
	);
};

export default Home;

// <Routes>
// 	<Route path='LoginPage' element={<LogInTest />}></Route>
// </Routes>;

// <LoginForm />
// <CreateUser />
