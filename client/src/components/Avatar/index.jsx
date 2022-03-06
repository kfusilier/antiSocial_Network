import style from './avatar.module.css';
import Smiley from './Smiley.png';

const Avatar = () => {
	return (
		<div className={style.avatarLocation}>
			<div className={style.avatarWrapper}>
				<div className={style.avatarImage}>
					<img src={Smiley} alt='smiley' />
				</div>
				<div className={style.avatarName}>
					<p>USER NAME</p>
				</div>
			</div>
		</div>
	);
};

export default Avatar;
