import { string } from "prop-types";

function Post(props) {
	return (
		<>
			<h1>{props.title}</h1>
			<div>
				<p>{props.body}</p>
                <p>By:{props.author}</p>
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
	author: "Tester",
};

export default Post;