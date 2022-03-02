// import React from 'react';

const LoginForm = () => {
	return (
		<div>
			<form>
				<h2>Login</h2>
				<h3>antiSocial</h3>
				<label>
					User Name:
					<input type='text' name='user name' />
					Password:
					<input type='text' name='password' />
				</label>
				<input type='submit' value='submit' />
			</form>
		</div>
	);
};

export default LoginForm;
