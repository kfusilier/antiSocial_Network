// import style from './CommentShow.module.css';
import { useEffect, useState } from "react";
import antiSocialAppTo from "../../api/axios.config";
import * as postService from "../../api/post.service";
import style from './CommentShow.module.css';



const CommentsList = () => {

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        await antiSocialAppTo.get("/users").then((res) => {
            console.log(res.data.data)
            setUsers(res.data.data);
        });
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return(
        
        <div className = 'hi'>
            {users.map((user) => {
                return (
                    <div className={style.CommentShow}>
                    
                        <h3>user: {user.screenName} </h3>
                      
                {/* <h3>{user.use
                rName}</h3> */}
                </div>
            )})}
            </div>
    )
}

export default CommentsList;

