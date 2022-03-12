import style from './editPost.module.css';
import { useEffect, useState } from "react";
import antiSocialAppTo from "../../api/axios.config";
import * as postService from "../../api/post.service";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";


const EditPost = (props) => {
	const [posts, setPosts] = useState([]);
	let { id } = useParams();
  
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


	const handleSubmit = async (event) => {
		event.preventDefault();
		// let commentId = ('');
		let res = await postService.updateComment(id).then(() => {
		//   setNewComment("");
		});
		console.log(res);
		if (!res === 201) {
		  alert(`bad: ${res.status}`);
		}
	  };


	useEffect(() => {
	  fetchPosts();
	}, []);
  
	return (
	  <div>
		<div id={style.title}>
		  <p>This is the edit post page!</p>

		  <br/>
          Post: <h3>{posts.text} </h3>
		  <form onSubmit={handleSubmit}>
          <label>
            Edit your post:
            <input
              type="text"
              value={posts.text}
            //   onChange={(e) => setComments(e.target.value)}
            />
          </label>

          <input type="submit" />
        </form>

		</div>
	  
		
	
	  </div>
	);
  };
  

export default EditPost;
