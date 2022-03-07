import style from './userProfile.module.css';
import Avatar from '../Avatar';
import CreatePost from '../CreatePost';

const UserProfile = () => {
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
