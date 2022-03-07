import style from './CommentShow.module.css';
import { useEffect, useState } from 'react';
import antiSocialAppTo from '../../api/axios.config';
import * as postService from '../../api/post.service';
import {  Route, NavLink } from 'react-router-dom';
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
						<h3>
							Post: {post.text} <br />
                            ID: {post._id} 
							{/* Created at: {post.createdAt} */}
							<br />
							<ul>
								{post.comments.map((sub) => (
									<li>{sub.content}</li>
								))}
								<NavLink to={`/posts/${post._id}`}>
                                <button type ='button' className={style.button}>See Post</button>
								</NavLink>
							</ul>
						</h3>


				
					</div>
				);
			})}
			
		</div>
	);
};

export default CommentsList;
