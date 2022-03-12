import Logo from '../../components/Logo';
import NavBar2 from '../../components/navbar2/index.jsx';

import UserProfile from '../../components/UserProfile';
import UsersPosts from '../../components/UsersPosts';

const ProfilePage = () => {
	return (
		<div>
			<NavBar2 />
			<Logo />
			<UserProfile />
			<div>
				<UsersPosts />
			</div>
		</div>
	);
};

export default ProfilePage;
