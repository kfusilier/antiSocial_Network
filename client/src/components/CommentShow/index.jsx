
import style from "./CommentShow.module.css";
import { useEffect, useState } from "react";
import * as postService from "../../api/post.service";
import { Route, NavLink } from "react-router-dom";
import Like from '../Like'

const CommentsList = (props) => {
  const [post, setPost] = useState("");
  const [postId, setPostId] = useState('');

  const getPost = async () =>{
  	await postService.getAll().then((res) => {
  		setPost(res.data.data)
      	setPostId(res.data.data)
  		// console.log(res.data.data)
  	})
  }

  useEffect (()=> {
  	getPost();
  }, [])

  return (
    <div>
      <div id={style.title}>
        <p>Browse Posts</p>
      </div>
	
      <div className={style.post}>
        <div className={style.text}>
          <h1> {props.screenName} </h1>
          <h3>{props.text} </h3>
          <NavLink to={`/post/${props.postId}`}>
            <br />
            <button type="button" className={style.button}>
              View Post
            </button>
          </NavLink>

          <Like/>
        </div>
      </div>
    </div>
  );
};

export default CommentsList;
