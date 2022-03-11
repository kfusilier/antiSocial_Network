import { useEffect, useState } from 'react';
import antiSocialAppTo from '../../api/axios.config';
import style from './userIcon.module.css';
import FollowButton from '../../components/FollowButton';
import Avatar from '../Avatar';
import Smiley from './Smiley.png';
import NavBar2 from '../Navbar2/index';

const UserIcon = () => {
	const [users, setUsers] = useState([]);

	const fetchUsers = async () => {
		await antiSocialAppTo.get('/users').then((res) => {
			setUsers(res.data.data);
		});
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<>
			<NavBar2 />
			<div className={style.displayWrapper}>
				<div className={style.usersContainer}>
					{users.map((user) => {
						return (
							<div>
								<img
									src={Smiley}
									alt='smiley icon'
									width='60px'
									height='60px'
								/>

								<div className={style.UserList}>
									{/* <img src={Smiley} alt='smiley' /> */}

									<h4 className={style.h3}>
										{user.screenName}
										<br />
										<button
											type='button'
											className={style.button}>
											+Follow
										</button>
									</h4>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default UserIcon;

// const [users, setUsers] = useState([]);

// const fetchUsers = async () => {
//     await antiSocialAppTo.get("/users").then((res) => {
//         setUsers(res.data.data);
//     });
// };

// useEffect(() => {
//     fetchUsers();
// }, []);

//     return(
//         <>
//     	<NavBar2/>

//         <div className = {style.displayWrapper}>

//         <div className = {style.usersContainer}>
//             {users.map((user) => {
//                 return (
//                     <div>
//                     <img src={Smiley} alt='smiley icon' width='60px'
// 					height='60px' />

//                     <div className={style.UserList}>
//                  {/* <img src={Smiley} alt='smiley' /> */}

//                         <h4 className={style.h3}>{user.screenName}</h4>
//                         <br/>
//                         <h4 className={style.h3}>{user._id}
//                        <br/>
//                        <button type ='button' className={style.button}>+Follow</button>
//                     </h4>

//                 </div>
//                 </div>
//             )})}
//             </div></div></>
//     )

// export default UserIcon;
