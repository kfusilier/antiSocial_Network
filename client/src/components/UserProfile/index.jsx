import style from './userProfile.module.css';
import Avatar from '../Avatar';
import CreatePost from '../CreatePost';

import React, {useState, useEffect} from 'react';

import PostForms from "../PostForms"
import * as postService from "../../api/post.service"

const UserProfile = () => {

	const [data, setData] = useState([])
	// const fetchUser = async () =>{
	// 	await postService.
	// }

	return (
		<div className={style.userProfile}>
			<p>User Profile</p>
			<div className={style.avatarPlacement}>
				<Avatar />
			</div>

			<div className={style.formPlacement}>
				<CreatePost />
			</div>
		</div>
	);
};

export default UserProfile;

// privacy toggle
// 			<div className={style.toggle}>
//				<p>privacy toggle?</p>
//			</div>

// edit user name
//			<div className={style.edit}>
//				<p>edit user name</p>
//			</div>
