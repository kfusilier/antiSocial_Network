import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './loginForm.module.css';
import Logo from '../Logo';
import * as authService from '../../api/auth.service';

const LoginForm = () => {
	let navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		await authService.login(email, password).then(() => {
			setEmail('');
			setPassword('');
			navigate('/BrowsePage');
		});
	};

	return (
		<div>
			<div id={style.title}>
				<p>Login</p>
			</div>
			<form className={style.loginForm}>
				<div>
					<div className={style.label}>
						<label>
							Username :
							<input
								className={style.input}
								type='text'
								name='userName'
								onChange={(e) =>
									setEmail(e.target.value)
								}
							/>
						</label>

						<div>
					
							<label for='pass'>
                                Password :
                                <input
                                    className={style.input}
                                    type='password'
                                    id='pass'
                                    name='password'
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </label>
						</div>
					</div>
				</div>
				<input
					className={style.button}
					type='submit'
					value='submit'
					onClick={handleSubmit}
				/>
			</form>
		</div>
	);
};

export default LoginForm;
