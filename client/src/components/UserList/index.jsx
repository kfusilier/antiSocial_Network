import { useEffect, useState } from "react";
import antiSocialAppTo from "../../api/axios.config";
import style from './userList.module.css';


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
        <div className = 'userList'>
            {users.map((user) => {
                return (
                    <div className={style.UserList}>
                    
                        <h3>user: {user.screenName}  
                        <button type ='button'>+Follow</button>
                        </h3>
                      
                {/* <h3>{user.use
                rName}</h3> */}
                </div>
            )})}
            </div>
    )
}

export default UserList;