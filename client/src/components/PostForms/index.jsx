import {useState} from "react";
import { func } from "prop-types";
import * as postService from "../../api/post.service"

const PostForms = ({ refreshPosts }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = async () => {
        let newPost = { title, body };
        let res = await postService.create(newPost).then(() => {
            setTitle("");
            setBody("");
            refreshPosts();
            console.log(newPost);
        });

        console.log(res);
        if (!res === 201) {
            alert(`ERROR! ${res.status}`)
    };

    };

    return(
        <div>
            <form>
                <label>
                    Post Title:
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        type="text"
                        name="title"
                        placeholder="Title..."
                    />
                </label>
                <label>
					What's on your mind?
					<textarea
						onChange={(e) => setBody(e.target.value)}
						value={body}
						type="text"
						name="body"
						placeholder="Post..."
					/>
				</label>
            </form>
            <button onCLick={handleSubmit}>Add Post!</button>
        </div>
    );

};

PostForms.propTypes = {
    refreshPosts: func,
};

export default PostForms;