import style from './avatar.module.css';
import Smiley from './Smiley.png';
import {useState, useEffect} from 'react'
import {useParams, useNavigate, Navigate} from 'react-router-dom';
import * as userService from "../../api/user.service.js"



const Avatar = (props) => {
  const[user, setUser] = useState("");
  const[screenName, setScreenName] = useState('')
	let {id} = useParams();
	let navigate = useNavigate();
	const fetchScreenName = async () => {
		await userService.showUser(id).then((res) => {
			setScreenName(res.data.data.screenName);
			setUser(res.data.data);
			console.log(id)
		})
	}

  useEffect(() => {
	fetchScreenName();
	setScreenName();
  },[]);

  const updateProfile = async () => {
	const updatedUser = {screenName};
	await userService.updateUser(id, updatedUser);
	props.refreshPost()
	document.location.reload()
	navigate(`/users/${id}`)
	}

//   const deleteProfile = async () => {
// 	await userService.destroyUser(id).then((res) => {
// 		setInfo(res.data.data)
// 		navigate('/SignupPage');
// 	})
//   }
	return (
    <>
		<div className={style.avatarLocation}>
			<div className={style.avatarWrapper}>
				<div className={style.avatarImage}>
					<img src={Smiley} alt='smiley' />
				</div>
				<div className={style.avatarName}>
					<h6>Screen Name:</h6>
					<h2>{user.screenName}</h2>
					<h6>Email:</h6>
					<h2>{user.email}</h2>
				</div>
			</div>
			<div>
				<h6>Change Name?</h6>
				<input
					onChange={(e) => setScreenName(e.target.value)}
					type="text"
					placeholder='Change Name?'
					value={screenName}
				/>
				<button className={style.button} onClick={updateProfile}>Save</button>
			</div>
		</div>
    </>
	)
};

export default Avatar;
