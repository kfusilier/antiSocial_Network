const CreateUser = () => {
	return (
		<div>
			<form>
				<h2>Create User</h2>
				<h3>antiSocial</h3>
				<label>
					User Name:
					<input type='text' name='user name' />
					E-mail:
					<input type='text' name='e-mail' />
					Password:
					<input type='text' name='password' />
				</label>
				<input type='submit' value='submit' />
			</form>
		</div>
	);
};

export default CreateUser;
