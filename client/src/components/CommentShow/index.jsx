import style from './CommentShow.module.css';
import { useEffect, useState } from 'react';
import antiSocialAppTo from '../../api/axios.config';
import * as postService from '../../api/post.service';
import * as userService from "../../api/user.service"
import { Route, NavLink } from 'react-router-dom';

const CommentsList = () => {
	const [posts, setPosts] = useState([]);
	const [user, setUsers] = useState([]);
	const fetchPosts = async () => {
		await antiSocialAppTo.get('/posts').then((res) => {
			
			console.log(res.data.data);
			setPosts(res.data.data.reverse());
		});
	};

	const fetchUsers = async () => {
		await antiSocialAppTo.getAllUser('/users').then((res) => {

			console.log(res.data.data);
			setUsers(res.data.data.reverse());
		});
	};

	useEffect(() => {
		fetchPosts();
		fetchUsers();
	}, []);

	return (
		<div>
			<div id={style.title}>
				<p>Browse Posts</p>
			</div>
			<div className={style.center}>
				<div className={style.container}>
					{posts.map((post, user) => {
						return (
							<div className={style.post}>
								<p className={style.text}>
									<br />
									Post: {post.text}
									<br />
									By: {post.user}
									<br />
									Created At: {post.createdAt}
									{/* Created at: {post.createdAt} */}
									<ul>
										<br />
										{/* {post.comments.map((sub) => (
											<li>{sub.content}</li>
										))} */}
										<NavLink
											to={`/posts/${post._id}`}>
											<br />
											<button
												type='button'
												className={
													style.button
												}>
												View Post
											</button>
										</NavLink>
									</ul>
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default CommentsList;
