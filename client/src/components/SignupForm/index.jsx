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
						E-mail:
						<input
							className={style.input}
							type='text'
							name='e-mail'
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

export default SignupForm;
