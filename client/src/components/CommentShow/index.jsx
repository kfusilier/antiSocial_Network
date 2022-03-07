// import style from './CommentShow.module.css';
import { useEffect, useState } from "react";
import antiSocialAppTo from "../../api/axios.config";
import * as postService from "../../api/post.service";
import style from './CommentShow.module.css';



const CommentsList = () => {

    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        await antiSocialAppTo.get("/posts").then((res) => {
            console.log(res.data.data)
            setPosts(res.data.data);
        });
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return(
        <div className = {style.displayWrapper}>
        
            {posts.map((post) => {
                return (
                    <div>
                    <div className={style.edits}>
                    
                        Post: {post.text} <br/><br/>
                        Comments:
                       <ul>
                       
                           {post.comments.map((sub)=>
                           <li>{sub.content}</li>)}
                       </ul>

                </div>
                </div>
            )})}
            </div>
            
    )
}

export default CommentsList;

