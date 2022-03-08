import style from './usersPosts.module.css';
import React, {useState, useEffect } from 'react'
import antiSocialAppTo from '../../api/axios.config';

const UsersPosts = () => {

	const [data, setData] = useState([])
	const fetchUserPost = async () => {
		await antiSocialAppTo.get('/posts/allPosts')
		// .then((res) => {
		// 	setData(res.data.data)
		// 	console.log(res.data.data)
		// })
		.then(res =>res.data.data)
		.then(result => {
			console.log(result)
		})
	}
	useEffect(()=>{
		fetchUserPost()
	},[])

	return (
		<div className={style.postsWrapper}>
			<p>User's Posts</p>
			<div className={style.posts}>
				<p>title</p>
				<p>body</p>
				<p>edit post</p>
			</div>
			<div className={style.posts}>
				<p>title</p>
				<p>body</p>
				<p>edit post</p>
			</div>
			<div className={style.posts}>
				<p>title</p>
				<p>body</p>
				<p>edit post</p>
			</div>
			<div className={style.posts}>
				<p>title</p>
				<p>body</p>
				<p>edit post</p>
			</div>
			<div className={style.posts}>
				<p>title</p>
				<p>body</p>
				<p>edit post</p>
			</div>
		</div>
	);
};

export default UsersPosts;
