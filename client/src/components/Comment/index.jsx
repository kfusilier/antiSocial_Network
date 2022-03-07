// import style from './CommentDisplay.module.css';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
// import antiSocialAppTo from "../../api/axios.config";
import * as postService from "../../api/post.service";


const Comment = (props) => {
  const [posts, setPosts] = useState([]);
  let {id} = useParams()

  const fetchPosts = async () => {
    await postService.get(`${id}`).then((res) => {
      
    console.log(res.data.data.comments);
      setPosts(res.data.data.comments);
    });
  };



  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      this the comments display component...
      <h3>
							<ul>
								{posts.map((sub) => (
                                    
									<li>{sub.content}</li>
								))}
							</ul>
	</h3>
    </div>
  );
};
export default Comment;