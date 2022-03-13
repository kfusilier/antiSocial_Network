import { useNavigate } from 'react-router-dom';

function Post(props) {
	let navigate = useNavigate();
	const handleSubmit = async (e) => {
		navigate('/posts');
	};
	return (
		<>
			<p>{props.title}</p>
			<div>
				<p>{props.body}</p>
				<p>By:{props.user}</p>
				<p>Comments:{props.comments}</p>
				<input
					type='submit'
					value='Comment'
					onClick={handleSubmit}
				/>
			</div>
		</>
	);
}

export default Post;
