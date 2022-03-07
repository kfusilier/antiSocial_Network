import style from './avatar.module.css';
import Smiley from './Smiley.png';
import UserList from '../UserList'

const Avatar = () => {
	return (
		<div className={style.avatarLocation}>
			<div className={style.avatarWrapper}>
				<div className={style.avatarImage}>
					<img src={Smiley} alt='smiley' />
				</div>
				<div className={style.avatarName}>
					<p>Name:</p>
				</div>
			</div>
		</div>
	);
};

export default Avatar;
