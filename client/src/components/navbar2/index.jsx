import { NavLink } from 'react-router-dom';
import style from './navBar2.module.css';
import { useNavigate } from 'react-router-dom';
import * as authService from "../../api/auth.service"
import { useEffect, useState } from 'react';

export default function NavBar2() {
	const[userID, setUserID] = useState("");
	const fetchId = async () => {
		let id = JSON.parse(localStorage.getItem('id'))
		setUserID(id);
	}

	const navigate = useNavigate();
	
	const logOut = async () => {
		await authService.logout().then(() => {
		  navigate("/login");
		})
	  }

	  useEffect(() => {
		fetchId();
	  })

	return (
		<>
			<div className={style.navBar}>
				{/* <a href="/">Home</<a> essentially. We can inline style Link!
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link> */}
				{/* NavLink is helpful when differentiating between nav links and regular links. It also automatically assigns an "isActive" class that makes it easier to style! */}
				{/* <NavLink
					to='/SignupPage'
					style={({ isActive }) => ({
						color: isActive ? '#37ecba' : 'white',
						textDecoration: 'none',
						padding: '10px',
					})}>
					SignUp
				</NavLink>
				<NavLink
					to='/LoginPage'
					style={({ isActive }) => ({
						color: isActive ? '#37ecba' : 'white',
						textDecoration: 'none',
					})}>
					Login
				</NavLink> */}
				<NavLink
					to='/BrowsePage'
					style={({ isActive }) => ({
						color: isActive ? '#37ecba' : 'white',
						textDecoration: 'none',
						padding: '5px',
					})}>
					Browse
				</NavLink>
				<NavLink
					to={`/users/${userID}`}
					style={({ isActive }) => ({
						color: isActive ? '#37ecba' : 'white',
						textDecoration: 'none',
						padding: '5px',
					})}>
					Profile
				</NavLink>
				<NavLink
					to='/UsersPage'
					style={({ isActive }) => ({
						color: isActive ? '#37ecba' : 'white',
						textDecoration: 'none',
						padding: '5px',
					})}>
					User List
				</NavLink>
				<NavLink
					to='/LoginPage'
					onClick={logOut}
					style={({ isActive }) => ({
						color: 'white',
						textDecoration: 'none',
						padding: '5px',
					})}>
					Log Out
				</NavLink>
			</div>
		</>
	);
}
