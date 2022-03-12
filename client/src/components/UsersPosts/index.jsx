import style from "./usersPosts.module.css";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import * as userService from "../../api/user.service"
import * as postService from "../../api/post.service"
import { NavLink } from "react-router-dom";

const UsersPosts = () => {
  const [profile, setProfile] = useState();
  const [posts, setPosts] = useState([]);
  const [screenName, setScreenName] = useState("");
  const [postId, setPostId] = useState("");
	let {id} = useParams();
	const showUser = async () => {
		await userService.showUser(id).then((res) =>{
			setProfile(res.data.data);
			setPosts(res.data.data.post);
			setScreenName(res.data.data.screenName);
      setPostId(res.data.data.post[0]._id);
    });
	};
  const deleteBtn = async () => {
    return postService.destroy(postId).then(() => {
      document.location = `/users/${id}`;
    });
  };
  useEffect(() => {
    showUser();
  });

  return (
    <>
      <div className={style.postsWrapper}>
          <div id={style.title}>
		  <p>User's Posts</p>	
          </div>
              <div className={style.posts}>
                <p className={style.text}>
                  <br />
                  {posts.map((post) => {
					  return(
								<>
								<h2>Post:{post.text}</h2>
								<h3>By: {screenName}</h3>
								<NavLink to={`/post/${post._id}`}>
                      <br />
                      <button type="button" className={style.button}>View Post</button>
                    </NavLink>
                    <button 
                    key={postId} 
                    type="button" 
                    className={style.button} 
                    onClick={deleteBtn}>Delete</button>
								</>
					  )
				  })}
                  <ul>
                  </ul>
                </p>
              </div>
    
        </div>
    </>

  )
};

export default UsersPosts;
