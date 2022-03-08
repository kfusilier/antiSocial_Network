import { useEffect, useState } from "react";
import antiSocialAppTo from "../../api/axios.config";
import style from './userList.module.css';
import FollowButton from '../../components/FollowButton'
import Avatar from "../Avatar";

const UserList = () => {

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        await antiSocialAppTo.get("/users").then((res) => {
            setUsers(res.data.data);
        });
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return(
        <div className = {style.displayWrapper}>
        <div className = {style.usersContainer}>
            {users.map((user) => {
                return (
                    <div className={style.UserList}>
                    
                        <h1>user: {user.screenName}</h1>
                        <h1>id:</h1>
                </div>
            )})}
            </div></div>

    )
}

export default UserList;