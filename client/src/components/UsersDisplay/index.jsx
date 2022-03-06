// Frame + Title + other Components

import FollowUser from '../FollowUser';
import style from './usersDisplay.module.css';

const UsersDisplay = () => {
	return (
		<div>
			<div id={style.title}>
				<p>User List</p>
			</div>
			<div className={style.displayWrapper}>
				<div className={style.usersContainer}>
					<FollowUser />
					<FollowUser />
					<FollowUser />
					<FollowUser />
					<FollowUser />
					<FollowUser />
					<FollowUser />
					<FollowUser />
					<FollowUser />
					<FollowUser />
					<FollowUser />
					<FollowUser />
					<FollowUser />
					<FollowUser />
					<FollowUser />
					<FollowUser />
					<FollowUser />
					<FollowUser />
					<FollowUser />
					<FollowUser />
					<FollowUser />
				</div>
			</div>
		</div>
	);
};

export default UsersDisplay;
