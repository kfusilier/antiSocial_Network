import style from "./editPost.module.css";
import { useEffect, useState } from "react";
import antiSocialAppTo from "../../api/axios.config";
import * as postService from "../../api/post.service";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";


const EditPost = (props) => {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState(props.text);
  let { id } = useParams();

  const fetchPosts = async () => {
    await postService.get(id).then((res) => {
      //   console.log(res.data.data);
      setPosts(res.data.data);
    });
  };

  const deleteBtn = async () => {
    await postService.destroy(id).then(() => {
      document.location = "/BrowsePage";
    });
  };

  const handleSubmit = async () => {
    const updatePost = { text, user: `${props.user}` };
    let res = await postService.update(props.postId, updatePost).then(() => {
      setText("");
      console.log(updatePost);
      props.refreshPosts();
	  document.location = "/BrowsePage";
    });
    if (!res === 201) {
      alert(`bad: ${res.status}`);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <div id={style.title}>
        <p>This is the edit post page!</p>
        <br />
        Post: <h3>{props.text} </h3>
        <form>
          <label>
            Edit your post:
            <textarea
              type="text"
              name="text"
              placeholder="body"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>

          <input
            className={style.button}
            type="submit"
            value="Save"
            onClick={handleSubmit}
          ></input>
        </form>
        <button className={style.button} onClick={deleteBtn}>
          Deletes
        </button>
      </div>
    </div>
  );
};

export default EditPost;
