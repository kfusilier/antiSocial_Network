import { useEffect, useReducer, useState } from 'react';
import * as postService from '../../api/post.service';
import * as userService from '../../api/user.service';
import * as authService from '../../api/auth.service';
import CommentShow from '../../components/CommentShow';
import Logo from '../../components/Logo';
import NavBar2 from '../../components/NavBar2/index.jsx';

const reducer = (prevState, action) => {
	switch (action.type) {
		case 'setPosts':
			return { ...prevState, posts: action.payload };
		case 'isLoggedIn':
			return { ...prevState, isLoggedIn: action.payload };
		default:
			return prevState;
	}
};

const initialState = {
	posts: [],
	isLoggedIn: false,
};

const BrowsePage = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { posts, isLoggedIn } = state;
	const [users, setUsers] = useState([]);

	const userActive = () => {
		if (authService.currentUser()) {
			dispatch({ type: 'isLoggedIn', payload: true });
		} else {
			dispatch({ type: 'isLoggedIn', payload: false });
		}
	};
	const fetchPosts = async () => {

		await postService.getAll().then((res) => {
			console.log(res.data.data);
			dispatch({ type: 'setPosts', payload: res.data.data.reverse() });
		});
	};

	const fetchUser = async () => {
		await userService.getAllUser().then((res) => {
			console.log(res.data.data);
			setUsers(res.data.data);
		});
	};

	useEffect(() => {
		fetchPosts();
		userActive();
		fetchUser();
	}, []);

	if (isLoggedIn) {
		return (
			<div>
				<>
					<NavBar2 />
					<Logo />
					<br/>
					<br/>
					<br/>
					{posts.map((post) => {
						return (
							<>
								<CommentShow
									screenName={post.user.screenName}
									text={post.text}
									postId={post._id}
								/>
							</>
						);
					})}
				</>
			</div>
		);
	} else {
		return (
			<div>
				<Logo />
			</div>
		);
	}
};

export default BrowsePage;
