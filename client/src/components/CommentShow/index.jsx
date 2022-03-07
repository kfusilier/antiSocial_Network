// import style from './CommentShow.module.css';
import { useEffect, useState } from 'react';
import antiSocialAppTo from '../../api/axios.config';
import * as postService from '../../api/post.service';
import style from './CommentShow.module.css';

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
		<div className='hi'>
			{posts.map((post) => {
				return (
					<div className={style.CommentShow}>
						<h3>
							Post: {post.text} <br />
							{/* Created at: {post.createdAt} */}
							<br />
							<ul>
								{post.comments.map((sub) => (
									<li>{sub.content}</li>
								))}
							</ul>
						</h3>

						{/* <h3>{user.use
                rName}</h3> */}
					</div>
				);
			})}
		</div>
	);
};

export default CommentsList;
