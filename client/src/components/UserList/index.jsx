import { useEffect, useState } from "react";
import antiSocialAppTo from "../../api/axios.config";

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
        <div>
            {users.map((user) => {
                return (
                    <div>
                <h2>{user.screenName}</h2>
                <h3>{user.userName}</h3>
                </div>
            )})}
            </div>
    )
}

export default UserList;