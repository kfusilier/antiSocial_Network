import {useEffect, useState} from "react";
import style from './userProfile.module.css';
import Avatar from '../Avatar';
import CreatePost from '../CreatePost';
import * as userService from "../../api/user.service"
import * as authService from "../../api/auth.service"


const UserProfile = () => {
	const[user, setuser] = useState("");
	

	const fetchUser = async () => {
		await userService.getAllUser().then((res)=> {
			
		});
	};

	useEffect(() => {
		fetchUser();
	}, []);

		return (
			<div className={style.userProfile}>
				<p>Profile Page</p>
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