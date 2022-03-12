
import style from "./CommentShow.module.css";
import { useEffect, useState } from "react";
import antiSocialAppTo from "../../api/axios.config";
import * as postService from "../../api/post.service";
import * as userService from "../../api/user.service";
import { Route, NavLink } from "react-router-dom";

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
  	getPost()
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
        </div>
      </div>
    </div>
  );
};

// const CommentsList = () => {
//   const [posts, setPosts] = useState([]);
//   const [user, setUser] = useState([]);

//   const fetchPosts = async () => {
//     await antiSocialAppTo.get("/posts").then((res) => {
//       console.log(res.data.data);
//       setPosts(res.data.data.reverse());
//     });
//   };

//   const fetchUser = async () => {
//     await userService.getAllUser().then((res) => {
//       setUser(res.data.data);
//       console.log(res.data.data);
//     });
//   };

//   useEffect(() => {
//     fetchPosts();
//     fetchUser();
//   }, []);

//   return (
//     <div>
//       <div id={style.title}>
//         <p>Browse Posts</p>
//       </div>

//       <div className={style.post}>
//         <div className={style.text}>
//           {user.map((users) => {
// 			  return (

// 				  <>
// 			  User: {users.screenName}

// 			  {posts.map((post) => {
// 				  return (
// 					  <>
//                 <br />
//                 Post: {post.text}
//                 <br />
//                 <br />
//                 Created At: {post.createdAt}
//                 <ul>
//                   <br />
//                   <NavLink to={`/posts/${post._id}`}>
//                     <br />
//                     <button type="button" className={style.button}>View Post</button>
//                   </NavLink>
//                 </ul>
//               </>
//             );
// 		})}
// 		</>)
// 		})}
//         </div>
//       </div>
//     </div>
//   );
// };

export default CommentsList;
