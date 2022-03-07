import style from './CommentShow.module.css';
import { useEffect, useState } from 'react';
import antiSocialAppTo from '../../api/axios.config';
import * as postService from '../../api/post.service';
import { Route, NavLink } from 'react-router-dom';
// import style from './commentShow.module.css';

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
			{posts.map((post) => {
				return (
					<div>
						<p>
							Post: {post.text} <br />
							By User: {post._id}
							{/* Created at: {post.createdAt} */}
							<ul>
								{post.comments.map((sub) => (
									<li>{sub.content}</li>
								))}
								<NavLink to={`/posts/${post._id}`}>
									<button
										type='button'
										className={style.button}>
										View Post
									</button>
								</NavLink>
							</ul>
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default CommentsList;
