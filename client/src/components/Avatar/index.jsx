import style from './avatar.module.css';
import Smiley from './Smiley.png';
import {useState, useEffect} from 'react'
import {useParams, useNavigate, Navigate} from 'react-router-dom';
import * as userService from "../../api/user.service.js"
import * as authService from "../../api/auth.service"


const Avatar = () => {
  const[user, setUser] = useState("");
  const[screenName, setScreenName] = useState('')
	let {id} = useParams();
	let navigate = useNavigate();
	const fetchScreenName = async () => {
		await userService.showUser(id).then((res) => {
			setScreenName(res.data.data.screenName);
			setUser(res.data.data.screenName);
			console.log(id)
		})
	}

  useEffect(() => {
	fetchScreenName();
	setScreenName();
  },[]);

  const updateProfile = async () => {
	const updatedUser = new FormData();
	updatedUser.append("screenName", screenName); 
	await userService.updateUser(user._id, updatedUser);
	navigate(`/users/${id}`)
	}

  const deleteProfile = async () => {
	await userService.destroyUser(id).then((res) => {
		authService.logout();
		navigate('/');
	})
  }

	return (
    <>
		<div className={style.avatarLocation}>
			<div className={style.avatarWrapper}>
				<div className={style.avatarImage}>
					<img src={Smiley} alt='smiley' />
				</div>
				<div className={style.avatarName}>
					<h6>Name:</h6>
					<h2>{user}</h2>
					<h6>Screen Name:</h6>
					<h2>{screenName}</h2>
				</div>
			</div>
			<div>
				<h6>Change Name?</h6>
				<input
					onChange={(e) => setScreenName(e.target.value)}
					type="text"
					value={screenName}
				/>
				<button className={style.button} onClick={updateProfile}>Save</button>
				<button onClick={deleteProfile}>Delete Profile</button>
			</div>
		</div>
    </>
	)
};

export default Avatar;
