import style from './CommentNew.module.css';
import { useEffect, useState } from 'react';
import antiSocialAppTo from '../../api/axios.config';
import * as postService from '../../api/post.service';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom'


const CommentNew = () => {

    const [newComment, setNewComment] = useState("");
    let {id} = useParams()

    console.log(id)

    const handleSubmit = async (event) => {

        event.preventDefault();

		let res = await postService.updateComment(id).then(() => {
			setNewComment("");
		});
		console.log(res);
		if (!res === 201) {
			alert(`bad: ${res.status}`);
		}
	}


  
  


	return (
		<div>
    
        <div>
        Hey! this is the create new comment show page
        <br></br>
        Comment: 
      
        <form onSubmit = {handleSubmit}>


      <label>Create your comment
        <input type="text" 
        // value ={comments.content}
        // onChange={(e) => setComments(e.target.value)}
        />
      </label>
      <input type ='submit'/>

    </form>
        </div>    
		</div>
	);
};



  
export default CommentNew;