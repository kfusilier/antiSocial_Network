import {useEffect, useState} from "react";
import style from './createPost.module.css';
import { func } from "prop-types";
import * as postService from "../../api/post.service"
import antiSocialAppTo from "../../api/axios.config";

const CreatePost = ({ refreshPosts }) => {
	// const[title, setTitle] = useState("");
	// const[text, setText] = useState("");

	// const handleSubmit = async () => {
    //     let newPost = { text };
    //     let res = await postService.create(newPost).then(() => {
    //         setTitle("");
    //         setText("");
    //         refreshPosts();
    //         console.log(newPost);
    //     });

    //     console.log(res);
    //     if (!res === 201) {
    //         alert(`ERROR! ${res.status}`)
    // };

    // };

	// const [text, setText] = useState([""])
	// const handleSubmit = async () => {
	// 	const formData = new FormData();
	// 	formData.append("text", text)

	// 	let res = await postService.create(formData).then(()=>{
	// 		console.log(formData);
	// 		setText("");
	// 		refreshPosts();
	// 	})
		
	// }

	// const handleSubmit = async () =>{
	// 	let newUserPost = {text};
	// 	let res = await postService.createPost(newUserPost)
	// 	.then((res)=>res.data)
	// 	.then((result)=>{
	// 		refreshPosts();
	// 		console.log(newUserPost)
	// 		// console.log(fetchCreatePost)
	// 	})
	// }
	// const[title, setTitle] = useState("");
	const[text, setText] = useState("");

	const handleSubmit = async () => {
        let newPost = { text };
        let res = await postService.create(newPost).then(() => {
            // setTitle("");
            setText("");
            refreshPosts();
            console.log(newPost);
        });

        console.log(res);
        if (!res === 201) {
            alert(`ERROR! ${res.status}`)
    }};

	return (
		<div>
			<form className={style.postForm}>
				<textarea
					className={style.input}
					// onChange={(e) => setText(e.target.value)}
					onChange={(e) => setText(e.target.value)}
					placeholder='Create a post...'></textarea>
				<div>
					<input
						className={style.button}
						type='submit'
						value='Post'
						onClick={handleSubmit}></input>
				</div>
			</form>
		</div>
	);
};

CreatePost.propTypes = {
    refreshPosts: func,
};


export default CreatePost;
