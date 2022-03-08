import { Routes, Route } from 'react-router-dom';
import Signup from '../SignupPage';
import Login from '../LoginPage';
import Landing from '../../components/Landing';

import ProfilePage from '../ProfilePage';
import BrowsePage from '../BrowsePage';
import UsersPage from '../UsersPage';
import UserIcon from '../../components/UserIcon';
import CommentPage from '../CommentPage';

import UserList from '../../components/UserList';
import CommentDisplay from '../../components/CommentDisplay';
import CommentShow from '../../components/CommentShow';

// import NavBar1 from '../../components/NavBar1';

const Home = () => {
	return (
		<div>
			<Routes>
				<Route path='/SignupPage' element={<Signup />}></Route>
				<Route path='/LoginPage' element={<Login />}></Route>
				<Route path='/' element={<Landing />}></Route>
				<Route
					path='/ProfilePage'
					element={<ProfilePage />}></Route>
				<Route path='/BrowsePage' element={<BrowsePage />}></Route>
				<Route path='/UsersPage' element={<UserIcon />}></Route>
				<Route path='/Posts' element={<CommentShow />}></Route>
				<Route path='/posts/:id' element={<CommentPage />}></Route>
			</Routes>
		</div>
	);
};

export default Home;
