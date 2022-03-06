import style from './userProfile.module.css';
import Avatar from '../Avatar';

const UserProfile = () => {
	return (
		<div className={style.userProfile}>
			<p>User Profile</p>
			<div className={style.avatarPlacement}>
				<Avatar />
			</div>
			<div className={style.edit}>
				<p>edit user name</p>
			</div>
			<div className={style.toggle}>
				<p>privacy toggle?</p>
			</div>


			<form className={style.form}>
				<label className={style.label}>
				Create Post</label>
				<input className={style.input}></input>
				<input
					className={style.button}
					type='submit'
					value='submit'
					</form>
		</div>
	);
};

export default UserProfile;
