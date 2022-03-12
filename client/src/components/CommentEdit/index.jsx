import style from './CommentEdit.module.css';
import { useEffect, useState } from 'react';
import antiSocialAppTo from '../../api/axios.config';
import * as postService from '../../api/post.service';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom'


const CommentEdit = () => {

    const [comments, setComments] = useState([]);
    let {id, commentId } = useParams();
    console.log(id, commentId)


    const fetchComments = async () => {
      await postService.editComment(id, commentId).then((res) => {
        console.log(res.data.data.comment);
        setComments(res.data.data.comment);
      });
    };
  
    const [newComment, setNewComment] = useState("");
    const handleSubmit = async (event) => {
    event.preventDefault();
		// let commentId = ('');
		let res = await postService.updateComment(id, commentId).then(() => {

			setNewComment("");
		});
		console.log(res);
		if (!res === 201) {
			alert(`bad: ${res.status}`);
		}
	}

  const deleteComment = async() => {
    await postService.deleteComment(id,commentId).then(()=> {
        // window.location = `/posts/${id}`
        console.log(id,commentId)
    })
  }


    useEffect(() => {
      fetchComments();
    }, []);

	return (
		<div>
    
        <div>
        Hey! this is the edit comment show page
        <br></br>
        Comment: {comments.content}
        <button onClick={deleteComment}>Delete</button>

      
      <form onSubmit = {handleSubmit}>




      <label>Edit your comment:
        <input type="text" 
        value ={comments.content}
        onChange={(e) => setComments(e.target.value)}
        />
      </label>

      <input type ='submit'/>
    </form>
        </div>    
		</div>
	);
};



  
export default CommentEdit;
