import style from './signupForm.module.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as authService from "../../api/auth.service";

const SignupForm = () => {
	const [screenName, setScreenName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [success, setSuccess] = useState("");
	
	let navigate = useNavigate();

	const handleSubmit = async (e) => {
	  e.preventDefault();
	  await authService.register(email, password, screenName);
	  setSuccess("REGISTERED");
	  navigate("/LoginPage");
	};
  
	return (
		<div>
			<form className={style.signupForm}>
				<div>
					<h2>Sign Up</h2>
				</div>

				<div className={style.label}>
					<label>
						Display Name:
						<input onChange={(e) => setScreenName(e.target.value)} className={style.input} type='text' name='user name' value={screenName}/>
					</label>
				</div>

				<div className={style.label}>
					<label>
						E-mail:
						<input onChange={(e) => setEmail(e.target.value)} className={style.input} type='text' name='e-mail' value={email}/>
					</label>
				</div>

				<div className={style.label}>
					<label>
						Password:
						<input onChange={(e) => setPassword(e.target.value)} className={style.input} type='text'name='password' value={password}/>
					</label>
				</div>

				<input
					className={style.button} type='submit' value='submit' onClick={handleSubmit}/>{success}</form>
		</div>
	);
};

export default SignupForm;
