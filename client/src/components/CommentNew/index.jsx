import style from './CommentNew.module.css';
import { useEffect, useState } from 'react';
import antiSocialAppTo from '../../api/axios.config';
import * as postService from '../../api/post.service';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { func } from "prop-types";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// const CommentNew = () => {

//     const [newComment, setNewComment] = useState("");
//     let {id} = useParams()

//     console.log(id)

//     const handleSubmit = async (event) => {

//         event.preventDefault();

// 		let res = await postService.createComment(id).then(() => {
// 			setNewComment("");
// 		});
// 		console.log(res);
// 		if (!res === 201) {
// 			alert(`bad: ${res.status}`);
// 		}
// 	}



// 	return (
// 		<div>
    
//         <div>
//         Hey! this is the create new comment show page
//         <br></br>
//         Comment: 
      
//         <form onSubmit = {handleSubmit}>


//       <label>Create your comment
//         <input type="text" 
//         // value ={comments.content}
//         // onChange={(e) => setComments(e.target.value)}
//         />
//       </label>
//       <input type ='submit'/>

//     </form>
//         </div>    
// 		</div>
// 	);
// };


const CommentNew = ({refreshPosts}) => {
	const [content, setContent] = useState("");
	
	let {id} = useParams()
	console.log(id)
	const handleSubmit = async () => {
		let newComment = { content };
		let res = await postService.createComment(id, newComment).then(() => {
			setContent("");
			console.log(newComment);
			document.location=`/post/${id}`
			// refreshPosts();
		});

		// 201 = create
		if (!res === 201) {
			alert(`ERROR! oh noes! not dope! it was code: ${res.status}`);
			console.log(res);
		}
	};

	return (
		<div className = {style.displayWrapper}>

<Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
Add a comment
		</Typography>
    

        <Typography variant="body2">
		<form>
				<label>
					<textarea
						onChange={(e) => setContent(e.target.value)}
						value={content}
						type="text"
						name="content"
						placeholder="input body value target, homie"
					/>
				</label>
			</form>
			<button className = {style.button} onClick={handleSubmit}> Submit Comment </button>

        </Typography>
      </CardContent>
	  
      
	  <br/>
    </Card>
		</div>
	);
};

CommentNew.propTypes = {
	refreshPosts: func,
};



  
export default CommentNew;