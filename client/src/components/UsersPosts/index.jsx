import style from './usersPosts.module.css';

const UsersPosts = () => {
	return (
		<div>
			<div id={style.title}>
				<p>User's Posts</p>
			</div>
			<div className={style.postsWrapper}>
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
		</div>
	);
};

export default UsersPosts;
