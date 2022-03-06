import style from './createPost.module.css';

const CreatePost = () => {
	return (
		<div>
			<form className={style.postForm}>
				<textarea
					className={style.input}
					placeholder='Create a post...'></textarea>
				<div>
					<input
						className={style.button}
						type='submit'
						value='Post'></input>
				</div>
			</form>
		</div>
	);
};

export default CreatePost;
