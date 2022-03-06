import {useState} from "react";
import { useNavigate } from "react-router-dom";
import style from './loginForm.module.css';
import * as authService from "../../api/auth.service";



const LoginForm = () => {
	let navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		await authService.login(email, password).then(() => {
			setEmail("");
			setPassword("");
			navigate("/BrowsePage");
		});
	  };
	
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
						Email:
						<input className={style.input} type='text' name='userName' onChange={e => setEmail(e.target.value)}/>
					</label>
				</div>
				<div className={style.label}>
					<label>
						Password:
						<input className={style.input} type='text' name='password' onChange={e => setPassword(e.target.value)}/>
					</label>
				</div>
				<input className={style.button} type='submit' value='submit' onClick={handleSubmit}/>
			</form>
		</div>
	);

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
