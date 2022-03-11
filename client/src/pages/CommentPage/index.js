import CommentDisplay from '../../components/CommentDisplay';
import Comment from '../../components/Comment';
import NavBar2 from '../../components/navbar2/index.jsx';

const CommentPage = () => {
	return (
		<div>
			<NavBar2 />
			<CommentDisplay />
			<Comment />
		</div>
	);
};

export default CommentPage;
