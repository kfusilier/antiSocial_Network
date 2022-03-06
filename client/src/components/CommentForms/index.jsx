import {useState} from "react";
import { func } from "prop-types";
import * as postService from "../../api/post.service"

const CommentForms = ({ refreshComments }) => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const handleSubmit = async () => {
        let newPost = { text };
        let res = await postService.create(newPost).then(() => {
            setTitle("");
            setText("");
            refreshComments();
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
					What's on your mind?
					<textarea
						onChange={(e) => setText(e.target.value)}
						value={text}
						type="text"
						name="body"
						placeholder="Post..."
					/>
				</label>
            </form>
            <button onClick={handleSubmit}>Add Comment!</button>
        </div>
    );

};

CommentForms.propTypes = {
    refreshComments: func,
};

export default CommentForms;


// Post Title:
// <input
//     onChange={(e) => setTitle(e.target.value)}
//     value={title}
//     type="text"
//     name="title"
//     placeholder="Title..."
// />