// import style from './CommentDisplay.module.css';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
// import antiSocialAppTo from "../../api/axios.config";
import * as postService from "../../api/post.service";


const CommentsList = (props) => {
  const [posts, setPosts] = useState([]);
  let {id} = useParams()

  const fetchPosts = async () => {
    await postService.get(id).then((res) => {
      console.log(res.data.data);
      setPosts(res.data.data);
    });
  };


  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      this the comment display page!
      <h3>
							Post: {posts.text} <br />
							Created at: {posts.createdAt}
							<br />
							<ul>
								{posts.comments.map((sub) => (
                                    
									<li>{sub.content}</li>
								))}
							</ul>
						</h3>
    </div>
  );
};
export default CommentsList;