import style from './usersDisplay.module.css';

const UsersDisplay = () => {
	return (
		<div>
			<div className={style.displayWrapper}>
				<p className={style.title}>User List Page</p>

				<div className={style.objectWrapper}>
					<p>follow user</p>
				</div>
			</div>
		</div>
	);
};

export default UsersDisplay;
