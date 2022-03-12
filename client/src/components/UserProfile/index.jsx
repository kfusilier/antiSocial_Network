import style from './userProfile.module.css';
import Avatar from '../Avatar';
import CreatePost from '../CreatePost';
import {useState, useEffect} from "react"
import * as postService from "../../api/post.service"

const UserProfile = () => {
	const [posts, setposts] = useState([])
	const fetchPosts = async () => {
		await postService.getAll().then((res) => {
			setposts(res.data.data)
		});
	};
	useEffect(()=>{
		fetchPosts();
	},[])

		return (
			<div className={style.userProfile}>
				<p>Profile Page</p>
				<div className={style.avatarPlacement}>
					<Avatar />
				</div>

				<div className={style.formPlacement}>
					<CreatePost refreshPosts={()=>{fetchPosts()}}/>
				</div>
			</div>
		);
	};

export default UserProfile;