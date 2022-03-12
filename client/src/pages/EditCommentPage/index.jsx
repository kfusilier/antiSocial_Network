import CommentShow from '../../components/CommentShow';
import CommentDisplay from '../../components/CommentDisplay';
import Comment from '../../components/Comment';
import CommentEdit from '../../components/CommentEdit';
import NavBar2 from '../../components/navbar2/index.jsx';

const EditCommentPage = () => {
	return (
		<div>
			<NavBar2 />

			<CommentEdit />
		</div>
	);
};

export default EditCommentPage;
