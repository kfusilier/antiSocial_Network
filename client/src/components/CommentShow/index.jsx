// import style from './CommentShow.module.css';
import { useEffect, useState } from "react";
import antiSocialAppTo from "../../api/axios.config";
import * as postService from "../../api/post.service";



export default function CommentShow() {

    const [comments, setComments] = useState([]);

    // const fetchComments = async () => {
    //     await antiSocialAppTo.get(`/posts/${comments._id}`).then((res) => {
    //         setComments(res.data.data);
    //     });
    // };

    const fetchComments = async () => {
		await postService.get('').then((res) => {
			setComments(res.data.data);
		});
	};

    useEffect(() => {
        fetchComments();
    }, []);

    return (
        <div>
        
        {comments.map((comment) => {
            return (
                <div>
                <br></br><br></br>
                <h1>Post: {comment.text}</h1>
                <h2>Comments: {comment.content}</h2>
                </div>
            )
        })}
            {/* <h1> This is the commetn show component!</h1> */}
        </div>
    )
}


