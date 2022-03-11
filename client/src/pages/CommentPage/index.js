import CommentDisplay from '../../components/CommentDisplay';
import Comment from '../../components/Comment';
import NavBar2 from '../../components/Navbar2/index.jsx';

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
