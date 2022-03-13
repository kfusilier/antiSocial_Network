import style from './signupForm.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as authService from '../../api/auth.service';

const SignupForm = () => {
	const [screenName, setScreenName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [success, setSuccess] = useState('');

	let navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await authService.register(email, password, screenName);
		setSuccess('REGISTERED');
		navigate('/LoginPage');
	};

	return (
		<div>
			<div id={style.title}>
				<p>Sign Up</p>
			</div>
			<form className={style.signupForm}>
				<div className={style.inputContainer}>
					<div className={style.label}>
						<label>
							Display Name:
							<input
								onChange={(e) =>
									setScreenName(e.target.value)
								}
								className={style.input}
								type='text'
								name='user name'
								value={screenName}
							/>
						</label>
					</div>
					<div className={style.label}>
						<label>
							E-mail:
							<input
								onChange={(e) =>
									setEmail(e.target.value)
								}
								className={style.input}
								type='text'
								name='e-mail'
								value={email}
							/>
						</label>
					</div>
					<div className={style.label}>
						<label for='pass'>
							Password:
							<input
								onChange={(e) =>
									setPassword(e.target.value)
								}
								className={style.input}
								id='pass'
								type='password'
								name='password'
								value={password}
							/>
						</label>
					</div>
				</div>
			</form>{' '}
			<input
				className={style.button}
				type='submit'
				value='submit'
				onClick={handleSubmit}
			/>
			{success}
		</div>
	);
};

export default SignupForm;
