import style from "./CommentShow.module.css";
import { useEffect, useState } from "react";
import * as postService from "../../api/post.service";
import { Route, NavLink } from "react-router-dom";
import Like from "../Like";

const CommentsList = (props) => {
  const [post, setPost] = useState("");
  const [postId, setPostId] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const getPost = async () => {
    await postService.getAll().then((res) => {
      setPost(res.data.data);
      setPostId(res.data.data);
      // console.log(res.data.data)
    });
  };

  useEffect(() => {
    // getPost();
  }, []);

  const handleClick = () => {
    {
      !isEdit ? setIsEdit(true) : setIsEdit(false);
    }
  };

  let id = JSON.parse(localStorage.getItem("id"));
  const Button = () => {
    if ((id === props.user)) {
      return (
        <>
        <div>
        <NavLink to={`/posts/${props.postId}/edit`}>
            <button
              onClick={handleClick}
              className={style.button}
              type="button"
            >
              Edit Post
            </button>
          </NavLink>
        </div>
        </>
      );
    } else {
      return <></>;
    }
  };

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
          <div>
            <Button />
          </div>
          

          <Like />
        </div>
      </div>
    </div>
  );
};

export default CommentsList;
