import Avatar from '../Avatar';
import style from './usersDisplay.module.css';

const UsersDisplay = () => {
	return (
		<div className={style.displayWrapper}>
			<p>User List</p>
			<div className={style.userWrapper}>
				<Avatar />
			</div>
		</div>
	);
};

export default UsersDisplay;
