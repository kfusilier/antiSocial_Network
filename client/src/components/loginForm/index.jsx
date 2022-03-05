import style from './loginForm.module.css';
import Logo from '../Logo';

const LoginForm = () => {
	return (
		<div>
			<form className={style.loginForm}>
				<div>
					<h2>Login</h2>
				</div>

				<div className={style.label}>
					<label>
						User Name:
						<input
							className={style.input}
							type='text'
							name='user name'
						/>
					</label>
				</div>

				<div className={style.label}>
					<label>
						Password:
						<input
							className={style.input}
							type='text'
							name='password'
						/>
					</label>
				</div>

				<input
					className={style.button}
					type='submit'
					value='submit'
				/>
			</form>
		</div>
	);
};

export default LoginForm;
