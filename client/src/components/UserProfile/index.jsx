import style from './userProfile.module.css';
import Avatar from '../Avatar';
import CreatePost from '../CreatePost';
import {useState, useEffect} from "react"
import { useParams } from 'react-router-dom';
import * as postService from "../../api/post.service"
import * as userService from "../../api/user.service"

const UserProfile = () => {
	const [posts, setposts] = useState([])
	const [screen, setScreen] = useState('');
	const fetchPosts = async () => {
		await postService.getAll().then((res) => {
			setposts(res.data.data)
		});
	};

	let {id} = useParams();
	const fetchScreenName = async () => {
		await userService.showUser(id).then((res) => {
			setScreen(res.data.data);
		})
	}

	useEffect(()=>{
		fetchPosts();
		fetchScreenName();
	},[])

		return (
			<div className={style.userProfile}>
				<p>Profile Page</p>
				<div className={style.avatarPlacement}>
					<Avatar refreshPost={()=>{fetchScreenName()}}/>
				</div>

				<div className={style.formPlacement}>
					<CreatePost refreshPosts={()=>{fetchPosts()}}/>
				</div>
			</div>
		);
	};

export default UserProfile;