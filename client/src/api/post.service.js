import antiSocialAppTo from "./axios.config";
// tellMyFlexSpaceTo is the instance of axios.create we created and includes the insance methods we need: .get .post .put .delete and others listed in the docs.

const posts = "/posts";

const getAll = () => {
	return antiSocialAppTo.get('/posts');
};

// const getAllPost = () => {
// 	return antiSocialAppTo.get('/posts/allPosts')
// }

const get = (_id) => {
	return antiSocialAppTo.get(`/posts/${_id}`);
};

const create = (data) => {
	return antiSocialAppTo.post(`${posts}`, data);
};

const update = (id, data) => {
	return antiSocialAppTo.put(`${posts}/${id}`, data);
};

const destroy = (id) => {
	return antiSocialAppTo.delete(`${posts}/${id}`);
};

const createComment = (id, data) => {
    return antiSocialAppTo.post(`/posts/${id}/comments`);
}

const editComment = (id, commentId) => {
    return antiSocialAppTo.get(`/posts/${id}/comments/${commentId}/edit`);
}

const updateComment = (id, commentId) => {
    return antiSocialAppTo.put(`/posts/${id}/comments/${commentId}`);
}

const deleteComment = (id) => {
    return antiSocialAppTo.delete(`/posts/${id}comments/${id}`);
}




// you can only export default when there's ONE thing to export
export { getAll, get, create, update, destroy,
createComment,
editComment,
updateComment,
deleteComment,

};

