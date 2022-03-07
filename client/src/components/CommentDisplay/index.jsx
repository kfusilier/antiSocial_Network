// import style from './CommentDisplay.module.css';
import { useEffect, useState } from "react";
// import antiSocialAppTo from "../../api/axios.config";
import * as postService from "../../api/post.service";


const CommentsList = (props) => {

    const [post, setPosts] = useState([]);

    const fetchPosts = async () => {
        await postService.get().then((res) => {
            console.log(res.data.data)
            setPosts(res.data.data);
        });
    };

    useEffect(() => {
        fetchPosts();
    }, []);

   
    return(
        <div>
        this the comment display page!
        <h2>{props.text}</h2>

        </div>
            
    )
}

export default CommentsList;

