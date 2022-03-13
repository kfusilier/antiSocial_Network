import { useState } from 'react';
import * as postService from '../../api/post.service';
import { useParams } from 'react-router-dom';
import style from './like.module.css';

const Like = (props) => {
	// const [likes, setLikes] = useState(`${props.like}`);
	const [likes, setLikes] = useState(props.likes);

	const updateLikes = async () => {
		let updateInPost = {likes: parseInt(likes)+1} 
		// console.log(updateInPost)
		await postService.update(props.postId, updateInPost).then((res)=> {
			setLikes(res.data.data.likes)
			// console.log(res.data.data.likes)
		})
	}

	return (
		<div>
			{/* <button onClick={updateLikes}>Like!</button> */}
			<button
				className={style.button}
				onClick={updateLikes}>
				Like
			</button>
			<span className={style.span}> {likes} </span>
		</div>
	);
};

export default Like;
