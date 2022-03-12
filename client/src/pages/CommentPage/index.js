import CommentDisplay from "../../components/CommentDisplay";
import Comment from "../../components/Comment";
import NavBar2 from "../../components/navbar2";
import { useState, useReducer, useEffect } from "react";
import * as authService from "../../api/auth.service";
import * as postService from "../../api/post.service";
import { useParams } from "react-router-dom";
import Logo from "../../components/Logo";

const reducer = (prevState, action) => {
  switch (action.type) {
    case "setPosts":
      return { ...prevState, posts: action.payload };
    case "isLoggedIn":
      return { ...prevState, isLoggedIn: action.payload };
    default:
      return prevState;
  }
};

const initialState = {
  posts: [],
  isLoggedIn: false,
};

const CommentPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { posts, isLoggedIn } = state;
  const [users, setUsers] = useState([]);
console.log(posts)
  const userActive = () => {
    if (authService.currentUser()) {
      dispatch({ type: "isLoggedIn", payload: true });
    } else {
      dispatch({ type: "isLoggedIn", payload: false });
    }
  };

  //   const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const { id } = useParams();
  // console.log(id)

    let ids = JSON.parse(localStorage.getItem("id"));
  // console.log(ids)
  const fetchPosts = async () => {
    await postService.get(id).then((res) => {
      console.log(res.data.data.user._id);
      //   setPosts(res.data.data);
      dispatch({ type: "setPosts", payload: res.data.data });
    });
  };
  //   const fetchAllPosts = async () => {
  // 	await postService.getAll().then((res) => {
  // 		console.log(res.data.data);
  // 		setAllPosts(res.data.data)
  // 	});
  // };

  useEffect(() => {
    fetchPosts();
    userActive();
    // fetchAllPosts();
  }, [])

  if (isLoggedIn) {
    return (
      <div>
        <NavBar2 />
        <CommentDisplay
          createdAt={posts.createdAt}
          text={posts.text}
		  /** NOTES: Currently setting user={ids} due to can't read post user */
		  user={ids}
          postId={posts._id}
        />
        {/* {posts.map((post)=> {
		  return (
			  <> 
			  <CommentDisplay 
			  createdAt={post.createdAt}
			  />
			  </>
		  )
	  })} */}

        {/* <Comment /> */}
      </div>
    );
  } else {
    return (
      <div>
        <Logo />
		<NavBar2 />
      </div>
    );
  }
};

export default CommentPage;
