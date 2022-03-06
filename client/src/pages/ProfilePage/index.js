import Logo from '../../components/Logo';
import UserProfile from '../../components/UserProfile';
import UsersPosts from '../../components/UsersPosts';

const ProfilePage = () => {
	return (
		<div>
			<Logo />
			<UserProfile />
			<>
				<UsersPosts />
			</>
		</div>
	);
};

export default ProfilePage;
