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

const commentsIdx = (req, res) => {
    db.Post.find({"comments._id":req.params.id}, (err, foundComment) => {
        if (err) return res.status(400).json({
            message: "Can't find comments",
            error: err
        })
        return res.status(200).json({
            message: "found Comments",
            data: foundComment
        })
    })
}




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

const editComments = (req, res) => {
    db.Post.findByIdAndUpdate(req.params.id, (err, editComment) => {
        editComment.comments
    })
}

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
    // idx,
    commentsIdx,
    newComments,
    destroyComments,
}

