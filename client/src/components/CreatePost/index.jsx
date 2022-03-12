import {useState} from "react";
import style from './createPost.module.css';
import * as postService from "../../api/post.service"

const CreatePost = ({ refreshPosts }) => {
	const[text, setText] = useState("");

	const handleSubmit = async () => {
        let newPost = { text };
        let res = await postService.create(newPost).then(() => {
            setText("");
            refreshPosts();
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

export default CreatePost;
