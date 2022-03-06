import { useEffect, useReducer } from 'react';
import PostForms from '../../components/PostForms';
import Post from '../../components/Posts';
import * as postService from '../../api/post.service';
import * as authService from '../../api/auth.service';
import Landing from '../../components/Landing';

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

	const fetchPosts = async () => {
		await postService.getAll().then((res) => {
			dispatch({ type: 'setPosts', payload: res.data.data.reverse() });
		});
	};

	const userActive = () => {
		if (authService.currentUser()) {
			dispatch({ type: 'isLoggedIn', payload: true });
		} else {
			dispatch({ type: 'isLoggedIn', payload: false });
		}
	};

	useEffect(() => {
		fetchPosts();
		userActive();
	}, []);

	if (isLoggedIn) {
		return (
			<div>
				<h1>antiSocial</h1>
				<>
					{posts.map((post) => {
						return (
							<Post
								author={post.user}
								body={post.text}
								key={post._id}></Post>
						);
					})}
					<PostForms refreshPosts={() => fetchPosts()} />
				</>
			</div>
		);
	} else {
		return <div></div>;
	}
};

export default BrowsePage;
