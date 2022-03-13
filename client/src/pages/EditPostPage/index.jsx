import EditPost from '../../components/EditPost';
import NavBar2 from '../../components/navbar2';
import { useState, useEffect } from 'react';
import * as postService from "../../api/post.service"
import {useParams} from "react-router-dom"

const EditPostPage = () => {
	const [post, setPost] = useState([]);
	const {id} = useParams();

	const fetchPosts = async () => {
		await postService.get(id).then((res) => {
			console.log(res.data.data);
			setPost(res.data.data)
		});
	};

	useEffect(() => {
		fetchPosts();
	}, [])

	return (
		<div>
			<NavBar2 />
			<EditPost 
			text={post.text}
			postId= {post._id}
			// refreshPosts={fetchPosts}
			/>
		</div>
	);
};

export default EditPostPage;
