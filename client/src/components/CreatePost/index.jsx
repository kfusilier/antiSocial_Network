import {useState} from "react";
import style from './createPost.module.css';
import { func } from "prop-types";
import * as postService from "../../api/post.service"

const CreatePost = ({ refreshPosts }) => {
	const[title, setTitle] = useState("");
	const[text, setText] = useState("");

	const handleSubmit = async () => {
        let newPost = { text };
        let res = await postService.create(newPost).then(() => {
            setTitle("");
            setText("");
            refreshPosts();
            console.log(newPost);
        });

        console.log(res);
        if (!res === 201) {
            alert(`ERROR! ${res.status}`)
    };

    };


	return (
		<div>
			<form className={style.postForm}>
				<textarea
					className={style.input}
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
