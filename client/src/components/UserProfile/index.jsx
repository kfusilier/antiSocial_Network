import style from './userProfile.module.css';
import Avatar from '../Avatar';
import CreatePost from '../CreatePost';

const UserProfile = () => {

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