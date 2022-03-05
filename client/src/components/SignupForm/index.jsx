import style from './signupForm.module.css';

const SignupForm = () => {
	return (
		<div>
			<div className={style.logo}>
				<h3>antiSocial</h3>
			</div>

			<form className={style.signupForm}>
				<div>
					<h2>Sign Up</h2>
				</div>

				<div className={style.input}>
					<label>
						User Name:
						<input type='text' name='user name' />
					</label>
				</div>

				<div className={style.input}>
					<label>
						E-mail:
						<input type='text' name='e-mail' />
					</label>
				</div>

				<div className={style.input}>
					<label>
						Password:
						<input type='text' name='password' />
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

export default SignupForm;
