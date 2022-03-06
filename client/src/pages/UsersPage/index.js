import UserList from "../../components/UserList";
import './style.css'

const UsersPage = () => {
    return(
        <div> 
        {/* <div className ='title'> antiSocial</div> */}
        
        
        <div className ='userBox'>
        <h1>Users</h1>
            {/* <div className='users'>   */}
            <UserList />
            {/* </div> */}
      
        </div>
        
        </div>
       
    )
}

export default UsersPage;