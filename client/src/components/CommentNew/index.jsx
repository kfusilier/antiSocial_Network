import style from './CommentNew.module.css';
import { useEffect, useState } from 'react';
import antiSocialAppTo from '../../api/axios.config';
import * as postService from '../../api/post.service';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { func } from "prop-types";


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


const CommentNew = (props) => {
	const [body, setBody] = useState("");
	
	let {id} = useParams()
	console.log(id)
	const handleSubmit = async () => {
		let newComment = { body };
		let res = await postService.createComment(id, newComment).then(() => {
			setBody("");
			props.refreshPosts();
			console.log(newComment);
		});

		console.log(res);
		// 201 = create
		if (!res === 201) {
			alert(`ERROR! oh noes! not dope! it was code: ${res.status}`);
		}
	};

	return (
		<div>
			<form>
				<label>
					What's on your mind, homie?
					<textarea
						onChange={(e) => setBody(e.target.value)}
						value={body}
						type="text"
						name="content"
						placeholder="input body value target, homie"
					/>
				</label>
			</form>
			<button onClick={handleSubmit}> Add Post, Homie + </button>
		</div>
	);
};

CommentNew.propTypes = {
	refreshPosts: func,
};



  
export default CommentNew;