import style from './Comment.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import antiSocialAppTo from "../../api/axios.config";
import * as postService from '../../api/post.service';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';

const Comment = (props) => {
	const [posts, setPosts] = useState([]);
	// let {id} = useParams()
	let { id, commentId } = useParams();
	console.log(id, commentId);
	const fetchPosts = async () => {
		await postService.get(`${id}`).then((res) => {
			console.log(res.data);
			console.log(res.data.data);
			console.log(res.data.data.comments);

			setPosts(res.data.data.comments);
		});
	};

	const deleteComment = async () => {
		await postService.deleteComment(id, commentId).then(() => {
			// window.location = `/posts/${id}`
			console.log(id, commentId);
		});
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return (

<div>
		
		
			       

			<Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Comments
		</Typography>
    

        <Typography variant="body2">
		
		<ul>
				{posts.map((sub) => (
					<li>
						{sub.content}
						{/* <br />
						<NavLink
							to={`/posts/${id}/comments/${sub._id}/edit`}>
							<button
								type='button'
								className={style.button}>
								Edit
							</button>
						</NavLink>

						<button className={style.button} onClick={deleteComment}>Delete</button> */}
					</li>
				))}
			</ul>    
        </Typography>
      </CardContent>
  
    </Card>

		
	
				
		</div>
	);
};
export default Comment;
