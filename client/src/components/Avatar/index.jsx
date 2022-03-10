import style from './avatar.module.css';
import Smiley from './Smiley.png';
import UserList from '../UserList'
import * as postService from "../../api/post.service"
import antiSocialAppTo from "../../api/axios.config";
import {useState, useEffect} from 'react'

const Avatar = () => {
	const [data, setData] = useState([]);
  const fetchUserPost = async () => {
    await antiSocialAppTo
      .get("/posts/userPosts")
      // .then((res) => {
      // 	setData(res.data.data)
      // 	console.log(res.data.data)
      // })
      .then((res) => res.data.userPosts)
      .then((result) => {
        console.log(result[0].user.screenName);
		setData(result[0].user)
      });
  };
  useEffect(() => {
    fetchUserPost();
  }, []);

	return (
		<div className={style.avatarLocation}>
			<div className={style.avatarWrapper}>
				<div className={style.avatarImage}>
					<img src={Smiley} alt='smiley' />
				</div>
				<div className={style.avatarName}>
					<h6>Name:</h6>
					<h2> {data.screenName}</h2>
				</div>
			</div>
		</div>
	);
};

export default Avatar;
