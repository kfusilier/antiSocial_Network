import style from "./loginForm.module.css"

const LoginForm = () => {
	return (
		<div>
			<form class="login-form">
			<h1>Login</h1>
			<div class="form-input-material">
			<input type="text" name="username" id="username" placeholder=" " autocomplete="off" class="form-control-material" required />
			<label for="username">Username</label>
			</div>
			<div class="form-input-material">
			<input type="password" name="password" id="password" placeholder=" " autocomplete="off" class="form-control-material" required />
			<label for="password">Password</label>
			</div>
			<button type="submit" class="btn btn-primary btn-ghost">Login</button>
			</form>
		</div>
	);
};

export default LoginForm;
