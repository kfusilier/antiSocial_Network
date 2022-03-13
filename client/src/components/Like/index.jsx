import { useState } from 'react';
import * as postService from '../../api/post.service';
import { useParams } from 'react-router-dom';
import style from './like.module.css';

const Like = (props) => {
	// const [likes, setLikes] = useState(`${props.like}`);
	const [likes, setLikes] = useState(0);

	// const updateLikes = async () => {
	//     let updatedPost = {likes: parseInt(likes)+1}
	//     await postService.update(`${props.post}`, updatedPost).then((res) => {
	//         setLikes(res.data.data)
	//         console.log(res.data.data)

	//     })
	// };

	return (
		<div>
			{/* <button onClick={updateLikes}>Like!</button> */}
			<button
				className={style.button}
				onClick={() => setLikes(likes + 1)}>
				Like
			</button>
			<span className={style.span}> {likes}</span>
		</div>
	);
};

export default Like;
