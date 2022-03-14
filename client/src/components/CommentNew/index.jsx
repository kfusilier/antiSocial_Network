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


const CommentNew = ({refreshPosts}) => {
	const [content, setContent] = useState("");
	
	let {id} = useParams()
	console.log(id)
	const handleSubmit = async () => {
		let newComment = { content };
		let res = await postService.createComment(id, newComment).then(() => {
			setContent("");
			console.log(newComment);
			// refreshPosts();
		});

		// 201 = create
		if (!res === 201) {
			alert(`ERROR! oh noes! not dope! it was code: ${res.status}`);
			console.log(res);
		}
	};

	return (
		<div>
			<form>
				<label>
					Add Your Comment:
					<textarea
						onChange={(e) => setContent(e.target.value)}
						value={content}
						type="text"
						name="content"
						placeholder="input body value target, homie"
					/>
				</label>
			</form>
			<button onClick={handleSubmit}> Submit Comment </button>
		</div>
	);
};

CommentNew.propTypes = {
	refreshPosts: func,
};



  
export default CommentNew;