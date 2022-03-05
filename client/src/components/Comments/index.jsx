import { string } from "prop-types";

function Comment(props) {
	return (
		<>
			<h1>{props.title}</h1>
			<div>
				<p>{props.body}</p>
                <p>By:{props.author}</p>
				<p>Comments:{props.comments}</p>
			</div>
		</>
	);
}

Comment.propTypes = {
	title: string.isRequired,
	author: string.isRequired,
	body: string.isRequired,
};

Comment.defaultProps = {
	author: "Tester",
};

export default Comment;