const db = require ('../models');

const idx = (req, res) => {
    db.Comment.find({}, (err, foundComments)  => {
        if(err)
        return res.status(400).json({
            message: "Failed to render comments",
            error: err
        })
        return res.status(200).json({
            message: "Success on all comments",
            data: foundComments
        })
    })
}


// const create = (req, res) => {
//     db.Post.findById(req.params.id, (err, newComment) => {
//         newComment.comments.push(req.body);
//         newComment.save(function() {
//             if(err) 
//             return res.status(200).json({
//                 message: "failed comments",
//                 error: err,
//             })
//             return res.status(201).json({
//                 message: "Succesfully Created",
//                 data:newComment
//             })
//         })
//     })
// }

// const create = (req, res) => {
//     db.Comment.create(req.body, (err, createComment) => {
//         if (err) return res.send(err);
//         console.log(createComment, "Created Comments");
//         db.Post.findById(createComment.post)
//         .exec((err, foundPost) => {
//             if(err) return res.send(err);
//             foundPost.comments.push(createComment);
//             foundPost.save();
//             db.User.findById(createComment.user)
//             .exec((err, foundUser) => {
//                 if(err) return res.send(err)
//                 foundUser.comments.push(createComment)
//                 foundUser.save();
//             })
//         })
//     })
// }

// async function create(res, req) {
//     try {
//         const post = await db.Post.findById(req.params.id)
//         req.body.createdBy = req.user._id
//         post.comments.push(req.body)
//         await post.save();
//     } catch (error) {
//         //  res.status(200).json({
//         //     message: "Create Failed",
//         //     error: error
//         // })
//         console.log(error)
//     }
// }

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





const destroy = (req,res) => {
    db.Comment.findByIdAndDelete(req.params.id, (err, destoryComment) => {
        if(err)
        return res.status(400).json({
            message: "Fail Delete Comments",
            error: err
        })
        return res.status(200).json({
            message: "Success Destroy",
            data: destoryComment
        })
    })
}

module.exports = {
    idx,
    newComments,
    destroy,
}

