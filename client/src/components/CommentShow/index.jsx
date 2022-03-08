import style from './CommentShow.module.css';
import { useEffect, useState } from 'react';
import antiSocialAppTo from '../../api/axios.config';
import * as postService from '../../api/post.service';
import { Route, NavLink } from 'react-router-dom';

const CommentsList = () => {
	const [posts, setPosts] = useState([]);
	const fetchPosts = async () => {
		await antiSocialAppTo.get('/posts').then((res) => {
			console.log(res.data.data);
			setPosts(res.data.data);
		});
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<div>
			<div id={style.title}>
				<p>Browse Posts</p>
			</div>
			<div className={style.center}>
				<div className={style.container}>
					{posts.map((post) => {
						return (
							<div className={style.post}>
								<p className={style.text}>
									<br />
									Post: {post.text}
									<br />
									<br />
									Author ID: {post._id}
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
