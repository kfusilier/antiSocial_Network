import CommentShow from '../../components/CommentShow';
import CommentDisplay from '../../components/CommentDisplay';

import NavBar2 from '../../components/NavBar2';
import Comment from '../../components/Comment'

const CommentPage = () => {
	return (
		<div>
			<NavBar2 />
        
			{/* <CommentShow /> */}
            <CommentDisplay/>
            <Comment/>
		</div>
	);
};

export default CommentPage;
