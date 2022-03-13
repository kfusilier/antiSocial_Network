import style from "./CommentDisplay.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
// import antiSocialAppTo from "../../api/axios.config";
import * as postService from "../../api/post.service";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import Comment from "../Comment";

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
      document.location = "/BrowsePage";
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleClick = () => {
    {
      !isEdit ? setIsEdit(true) : setIsEdit(false);
    }
  };

  let ids = JSON.parse(localStorage.getItem("id"));
  // console.log(ids)
  const Button = () => {
    if (ids === props.user) {
      return (
        <>
          <NavLink to={`/posts/${props.postId}/edit`}>
            <button
              onClick={handleClick}
              className={style.button}
              type="button"
            >
              Edit Post
            </button>
          </NavLink>
        </>
      );
    } else {
      return <></>;
    }
  };

  return (
    <div className={style.usersContainer}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            POST
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Created at: {props.createdAt}
          </Typography>
          <Typography variant="body2">
            {props.text} <br /> <br />
            {/* <button className={style.button} onClick={deleteBtn}>
              Deletes
            </button> */}
            {/* <Button /> */}
            {/* <NavLink to={`/posts/${id}/edit`}>
              <button className={style.button} type="button">
                Edit Post
              </button>
            </NavLink> */}
            <NavLink to={`/posts/${props.postId}/comments/new`}>
              <button className={style.button} type="button">
                add a new comment!
              </button>
            </NavLink>
            <br />
            <br />
          </Typography>
        </CardContent>
        {/* <Comment /> */}
        <CardActions>
          {/* <Button size="small">Learn More</Button> */}
        </CardActions>
      </Card>
    </div>
  );
};
export default CommentsList;
