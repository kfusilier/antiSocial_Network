import { useNavigate } from "react-router-dom";


function Post(props) {
	let navigate = useNavigate();
	const handleSubmit = async (e) => {
			navigate("/posts");
		};
	return (
		<>
			<h1>{props.title}</h1>
			<div>
				<p>{props.body}</p>
                <p>By:{props.user}</p>
				<p>Comments:{props.comments}</p>
				<input type='submit' value='Comment' onClick={handleSubmit}/>
			</div>
		</>
	);
}

export default Post;