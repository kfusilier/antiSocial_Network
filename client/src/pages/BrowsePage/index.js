import {useState, useEffect} from "react";
import PostForms from "../../components/PostForms";
import Post from "../../components/Posts";
import * as postService from "../../api/post.service";


const BrowsePage = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        await postService.getAll().then((res) => {
            setPosts(res.data.data.reverse());
        });
    };

    useEffect(() => {
        fetchPosts();
    }, []);


    return(
        <div>
       <h1>antiSocial</h1>
       <>
       <PostForms refreshPosts={() => fetchPosts()} />
       {posts.map((post) => {
           return(
               <Post 
               title={post.title}
               author={post.user}
               body={post.text}
               comments={post.comments}
               key={post._id}
               />
           );
       })}
       </>
       </div>
    )
}

export default BrowsePage;
