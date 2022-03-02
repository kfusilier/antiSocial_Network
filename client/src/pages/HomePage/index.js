// import { useState, useEffect } from 'react';
// import Post from '../../components/Post';
// import Welcome from '../../components/Welcome';
// import PostForm from '../../components/PostForm';
import NavBar from '../../components/navbar2';
import UsersPage from '../UsersPage';
import { Routes, Route } from 'react-router-dom';
import Landing from '../../components/Landing';

const Home = () => {
	return (
		<div>
			<NavBar />
			<Landing />
			<Routes>
				<Route path='user' element={<UsersPage />}></Route>
			</Routes>
		</div>
	);
};

export default Home;
