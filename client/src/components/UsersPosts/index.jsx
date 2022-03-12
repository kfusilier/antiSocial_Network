import style from "./usersPosts.module.css";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import * as userService from "../../api/user.service"

const UsersPosts = () => {
  const [profile, setProfile] = useState();
  const [posts, setPosts] = useState([]);
  const [screenName, setScreenName] = useState("");
	let {id} =useParams();
	const showUser = async () => {
		await userService.showUser(id).then((res) =>{
			setProfile(res.data.data);
			console.log(res.data.data);
			setPosts(res.data.data.post);
			setScreenName(res.data.data.screenName)
			console.log(res.data.data.screenName)
		})
	}
//   const fetchUserProfile = async () => {
//     await authService.getProfile().then((res) => {
// 		setProfile(res.data.data);
// 		console.log(res.data.data)
//       });
//   };
  useEffect(() => {
    showUser();
  }, []);

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
							{/* </div> */}
							{/* <div className="post-body-info"> */}
								{/* <p key={post._id}>{post.body}</p> */}
								</>
					  )
				  })}
                  <ul>
					  <br />

					 {/* <p>Post:</p> */}

                    {/* <NavLink to={`/posts/${post._id}`}>
                      <br />
                      <button type="button" className={style.button}>
                        View Post
                      </button>
                    </NavLink> */}
                  </ul>
                </p>
              </div>
    
        </div>
    </>

  )
};

export default UsersPosts;
