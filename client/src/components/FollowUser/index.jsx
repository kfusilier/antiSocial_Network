import style from './followUser.module.css';
import Smiley from './Smiley.png';

const FollowUser = () => {
	return (
		<div className={style.wrapper}>
			<div>
				<img
					className={style.icon}
					src={Smiley}
					width='60px'
					height='60px'
					alt='smiley icon'
				/>
			</div>
			<div>
				<button className={style.button} type='button'>
					+ Follow
				</button>
			</div>
		</div>
	);
};

export default FollowUser;
