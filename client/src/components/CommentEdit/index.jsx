import style from './CommentEdit.module.css';
import { useEffect, useState } from 'react';
import antiSocialAppTo from '../../api/axios.config';
import * as postService from '../../api/post.service';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom'


const CommentEdit = () => {

    const [comments, setPosts] = useState([]);
    let {id, commentId } = useParams();
    console.log(id, commentId)


    const fetchPosts = async () => {
      await postService.editComment(id, commentId).then((res) => {
        console.log(res);
        console.log(res.data.data.comment);

        console.log(commentId)
        setPosts(res.data.data.comment);


      });
    };
  
  
    useEffect(() => {
      fetchPosts();
    }, []);

	return (
		<div>
        <div>
     

        {comments.content}
	
      
        </div>    
		</div>
	);
};

export default CommentEdit;