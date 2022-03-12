import Logo from '../../components/Logo';
import NavBar2 from '../../components/NavBar2';
import UserProfile from '../../components/UserProfile';
import UsersPosts from '../../components/UsersPosts';

const ProfilePage = () => {
	return (
		<div>
			<NavBar2 />
			<Logo />
			<UserProfile />
			<>
				<UsersPosts />
			</>
		</div>
	);
};

export default ProfilePage;
