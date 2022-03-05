import {useState} from "react";
import PropTypes from 'prop-types';
import style from './loginForm.module.css';


const LoginForm = ({setToken}) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	async function loginUser(credentials) {
		return fetch('http://localhost:4000/BrowsePage', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json'
		  },
		  body: JSON.stringify(credentials)
		})
		  .then(data => data.json())
	   }
	
	return (
		<div>
			<div className={style.logo}>
				<h3>antiSocial</h3>
			</div>

			<form className={style.loginForm}>
				<div>
					<h2>Login</h2>
				</div>

				<div className={style.label}>
					<label>
						User Name:
						<input className={style.input} type='text' name='userName' onChange={e => setUsername(e.target.value)}/>
					</label>
				</div>
				<div className={style.label}>
					<label>
						Password:
						<input className={style.input} type='text' name='password' onChange={e => setPassword(e.target.value)}/>
					</label>
				</div>
				<input className={style.button} type='submit' value='submit'/>
			</form>
		</div>
	);

};

LoginForm.propTypes = {
	setToken: PropTypes.func.isRequired
};

export default LoginForm;

// <div>
// 			<form class='login-form'>
// 				<h1>Login</h1>
// 				<div class='form-input-material'>
// 					<input
// 						type='text'
// 						name='username'
// 						id='username'
// 						placeholder=' '
// 						autocomplete='off'
// 						class='form-control-material'
// 						required
// 					/>
// 					<label for='username'>Username</label>
// 				</div>
// 				<div class='form-input-material'>
// 					<input
// 						type='password'
// 						name='password'
// 						id='password'
// 						placeholder=' test'
// 						autocomplete='off'
// 						class='form-control-material'
// 						required
// 					/>
// 					<label for='password'>Password</label>
// 				</div>
// 				<button type='submit' class='btn btn-primary btn-ghost'>
// 					Login
// 				</button>
// 			</form>
// 		</div>
