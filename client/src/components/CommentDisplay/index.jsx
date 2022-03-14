import style from './CommentDisplay.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import antiSocialAppTo from "../../api/axios.config";
import * as postService from '../../api/post.service';
import { NavLink } from 'react-router-dom';
import Comment from '../Comment';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const CommentsList = (props) => {
	const [posts, setPosts] = useState([]);
	let { id } = useParams();
	const [isEdit, setIsEdit] = useState(false);

	const fetchPosts = async () => {
		await postService.get(id).then((res) => {
			//   console.log(res.data.data);
			setPosts(res.data.data);
		});
	};

	const deleteBtn = async () => {
		await postService.destroy(id).then(() => {
			document.location = '/BrowsePage';
		});
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	// const handleClick = () => {
	// 	{
	// 		!isEdit ? setIsEdit(true) : setIsEdit(false);
	// 	}
	// };

	// let ids = JSON.parse(localStorage.getItem('id'));
	// // console.log(ids)
	// const Button = () => {
	// 	if (ids === props.user) {
	// 		return (
	// 			<>
	// 				<NavLink to={`/posts/${props.postId}/edit`}>
	// 					<button
	// 						onClick={handleClick}
	// 						className={style.button}
	// 						type='button'>
	// 						Edit Post
	// 					</button>
	// 				</NavLink>
	// 			</>
	// 		);
	// 	} else {
	// 		return <></>;
	// 	}
	// };

	return (

		<div className = {style.displayWrapper}>
			{/* <div className={style.displayWrapper}>
				<div className={style.usersContainer}>
					<p>User's Name???</p>
					<br></br>
					<p>{props.text}</p>
					<br></br>
					<p>Created at: {props.createdAt}</p>
					<br /> <br />
				</div>
				<NavLink to={`/posts/${props.postId}/comments/new`}>
					<button className={style.button} type='button'>
						add a new comment!
					</button>
				</NavLink>
			</div> */}
		

			<Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
Post by:
        
		</Typography>
    

        <Typography variant="body2">
		<p>{props.text}</p>
    
	
        </Typography>
      </CardContent>
	  
      
	  <br/>
    </Card>
<br/>

<NavLink to={`/posts/${props.postId}/comments/new`}>
        <button className={style.button} >Add a Comment</button></NavLink>
	<br/>
	<br/>

	<Comment/>
	<br/>



		</div>
	);
};
export default CommentsList;
