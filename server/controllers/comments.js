const db = require ('../models');

// const idx = (req, res) => {
//     db.Comment.find({}, (err, foundComments)  => {
//         if(err)
//         return res.status(400).json({
//             message: "Failed to render comments",
//             error: err
//         })
//         return res.status(200).json({
//             message: "Success on all comments",
//             data: foundComments
//         })
//     })
// }

// const commentsIdx = (req, res) => {
//     db.Post.findById(req.params.id, (err, foundComment) => {
//         foundComment.comments.find({}, (err, findComments) => {
//             if (err) return res.status(400).json({
//                 message: "Can't find comments",
//                 error: err
//             })
//             return res.status(200).json({
//                 message:"Comments Found",
//                 data: findComments
//             })
//         })
//     })
// }

// const commentsIdx = (req, res) => {
//     db.Post.findById({"comment._id":req.params.id}, (err, foundComment) => {
//         if (err) return res.status(400).json({
//             message: "Can't find comments!!!",
//             error: err
//         })
//         return res.status(200).json({
//             message: "found Comments",
//             data: foundComment
//         })
//     })
// }

const commentsIdx = (req, res) => {
    db.Post.findById({"comment._id":req.params.id}, (err, foundComment) => {
        if (err) return res.status(400).json({
            message: "Can't find comments!!!",
            error: err
        })
        return res.status(200).json({
            message: "found Comments",
            data: foundComment
        })
    })
}



const show = (req, res) => {
	db.Post.findOne({'comment._id': req.params.id}, (err, foundComment) => {
		if (err)
			return res.status(400).json({
				message: "Utter Failure! with show!!",
				error: err,
			});
		return res.status(200).json({
			message: "Success! with commentSHOW!!!",
			data: foundComment,
		});
	}); 
};




const newComments = (req, res) => {
    db.Post.findById(req.params.id, (err, newComment) => {
        newComment.comments.push(req.body);
        newComment.save(function() {
            if(err) return res.status(200).json({
                message: "Fail comment",
                error: err
            })
            return res.status(201).json({
                message: "Comment Created",
                data: newComment
            })
        })
    })
}

// const newComments = (req, res) => {
//     const comment = new db.Post({
//         content:req.body.content,
//         user: req.user,
//     })
//     comment 
//     .save()
//     .then((result) => {
//         res.send({comment: result})
//         console.log (result)
//     })
// }


const editComment = (req, res) => {
    db.Post.findOne({"comment._id":req.params.id}, (err, post) => {
        const commentId = post.comments.id(req.params.id);
        const context = {comment: commentId};
            if(err)
            return res.status(400).json({
                message: "Can't edit comment!",
                error: err,
            });
            return res.status(200).json({
                message: "Comments retrieved for edit",
                data: context,
            });
    });
};


const updateComment = (req, res) => {
    db.Post.findOne({"comment._id":req.params.id}, (err, updatedComment) => {
        const commentId = updatedComment.comments.id(req.params.id);
        commentId.set(req.body);
        updatedComment.save(function() {
            if(err)
                return res.status(400).json({
                    message: "Failure to update comments",
                    error: err,
                });
                return res.status(200).json({
                    message: "Gj updating comments!",
                    data: updatedComment,
                });
        });
    });
};


const destroyComments = (req, res) => {
    db.Post.findOne({"comment._id":req.params.id}, (err, deleteComment) => {
        const commentLine = deleteComment.comments.id(req.params.id);
        commentLine.remove();
        commentLine.save(function (){
            if (err) return res.status(400).json({
                message: "You fail to delete",
                error: err
            })
            return res.status(200).json({
                message: "Delete Success",
                data: deleteComment
            })
        })
    })
}



module.exports = {
    show,
    commentsIdx,
    newComments,
    destroyComments,
    editComment,
    updateComment,
}

