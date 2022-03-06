import {useState} from "react";
import { useNavigate } from "react-router-dom";
import style from './loginForm.module.css';
import Logo from '../Logo';
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
