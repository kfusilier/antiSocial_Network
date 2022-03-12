import style from './avatar.module.css';
import Smiley from './Smiley.png';
import {useState, useEffect} from 'react'


const Avatar = () => {
  const[user, setUser] = useState("");
  const fetchUserInfo = async () => {
    let userName = JSON.parse(localStorage.getItem("screenName"))
    // await authService.getUserName().then((res) => {
    //   console.log(ResizeObserverEntry);
       setUser(userName);
    };

  useEffect(() => {
    fetchUserInfo();
  }, []);
  
	return (
    <>
		<div className={style.avatarLocation}>
			<div className={style.avatarWrapper}>
				<div className={style.avatarImage}>
					<img src={Smiley} alt='smiley' />
				</div>
				<div className={style.avatarName}>
					<h6>Name:</h6>
					<h2> {user}</h2>
				</div>
			</div>
		</div>
    </>
	)
};

export default Avatar;
