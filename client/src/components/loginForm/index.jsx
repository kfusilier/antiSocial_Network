import style from './loginForm.module.css';

const LoginForm = () => {
	return (
		<div>
			<div className={style.logo}>
				<h3>antiSocial</h3>
			</div>
			<form className={style.loginForm}>
				<div>
					<h2>Login</h2>
				</div>

				<div className={style.input}>
					<label>
						User Name:
						<input
							type='text'
							name='user name'
							padding='5px'
						/>
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
