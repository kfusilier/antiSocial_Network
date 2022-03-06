import style from './avatar.module.css';

const Avatar = () => {
	return (
		<div className={style.avatar}>
			<div className={style.userName}>
				<p>Avatar</p>
			</div>
		</div>
	);
};

export default Avatar;
