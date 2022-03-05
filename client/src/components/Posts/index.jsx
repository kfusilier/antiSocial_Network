import { string } from "prop-types";

function Post(props) {
	return (
		<>
			<h1>Title: {props.title}</h1>
			<p>By: {props.author}</p>
			<div>
				<p>{props.body}</p>
			</div>
		</>
	);
}

Post.propTypes = {
	title: string.isRequired,
	author: string.isRequired,
	body: string.isRequired,
};

Post.defaultProps = {
	author: "User",
};

export default Post;