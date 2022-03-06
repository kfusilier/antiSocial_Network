import style from './usersPosts.module.css';

const UsersPosts = () => {
	return (
		<div className={style.postsWrapper}>
			<p>User's Posts</p>
			<div className={style.posts}>
				<p>title</p>
				<p>body</p>
				<p>edit post</p>
			</div>
			<div className={style.posts}>
				<p>title</p>
				<p>body</p>
				<p>edit post</p>
			</div>
			<div className={style.posts}>
				<p>title</p>
				<p>body</p>
				<p>edit post</p>
			</div>
			<div className={style.posts}>
				<p>title</p>
				<p>body</p>
				<p>edit post</p>
			</div>
			<div className={style.posts}>
				<p>title</p>
				<p>body</p>
				<p>edit post</p>
			</div>
		</div>
	);
};

export default UsersPosts;
