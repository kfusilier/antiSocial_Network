const db = require("../models");
const Post = require("../models/Post");

// can use this after Users & Comments are created

//index
// const index = (req,res) => {
//     db.Post.find({}, (err, foundPosts) => {
//         if(err) return res.send(err);
//         db.Comment.find({}, (err, foundComments)=> {
//             res.render('posts/index', {
//                 posts:foundPosts,
//                 comments: foundComments,
//             })
//         })
//     })
// }

const index = (req, res) => {
  db.Post.find().exec((err, allPosts) => {
    if (err)
      return res.status(400).json({
        message: "Utter Failure! for INDEX",
        error: err,
      });
    return res.status(200).json({
      message: "Success!",
      data: allPosts,
    });
  });
};

// show

const show = (req, res) => {
	db.Post.findById(req.params.id, (err, foundPost) => {
		if (err)
			return res.status(400).json({
				message: "Utter Failure!",
				error: err,
			});
		return res.status(200).json({
			message: "Success! with post show",
			data: foundPost,
		});
	});

};

// can use this after Users & Comments are created

// const show = (req, res) => {
//     db.Post.findById(req.params.id)
//         .populate("user")
//         .populate("comments")
//         .exec((err, foundPost) => {
//             if (err) return res.send(err)
//             console.log(foundPost, "found post")
//             db.Comment.find({}, (err, foundComments) => {
//                 if (err) return res.send(err);
//                     res.render("posts/show", {
//                         post: foundPost,
//                         comments: foundComments,
//                         // loginUser: req.user,
//                     }
//                 )
//             })
//         })
// };

//new post // -- can use when Users is connected

const newPost = (req, res) => {
  const post = db.Post();
  db.User.find({}, (err, foundUsers) => {
    if (err) return res.send(err);
    db.Comment.find({}, (err, foundComments) => {
      res.render("posts/new", {
        users: foundUsers,
        comment: foundComments,
        post: post,
      });
    });
  });
};

// create --- can use this after Users & Comments are created

const create = async (req, res) => {
  const post = new db.Post({
    text: req.body.text,
    // comment: req.body.comment,
    user: req.user,
  });
  // if (req.file) {
  //     post.image= req.file.path
  // }
  post
    .save()
    .then((result) => {
      res.send({ post: result });
    })
    .catch((err) => {
      res.status(422).json({
        error: err,
      });
    });
//   const createdPost = await post.save();
//   db.User.findById(createdPost.user).exec((err, foundUser) => {
//     if (err) return console.log("error in posts creation", err);
//     foundUser.posts.push(createdPost);
//     foundUser.save();
//     // res.redirect(`/users/${foundUser._id}`)
//     return res.status(201).json({
//       message: "success!",
//       data: createdPost,
//     });
//   });
};

const allPosts = async (req, res) => {
  db.Post.find()
    .populate("user", "_id screenName email")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => {
      console.log(err);
    });
};

const createPost = async (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(422).json({ error: "Please add context" });
  }
  const post = new db.Post({
    text,
    user: req.user,
  });
  post
    .save()
    .then((result) => {
      res.send({ post: result });
    })
    .catch((err) => {
      res.status(422).json({
        error: err,
      });
    });
};

const userPosts = async (req, res) => {
  db.Post.find({ user: req.user._id })
    .populate("user", "_id screenName email")
    .then((userPosts) => {
      res.json({ userPosts });
    })
    .catch((err) => {
      console.log(err);
    });
};

// const create = (req, res) => {
// 	db.Post.create(req.body, (err, createdPost) => {
// 		if (err)
// 			return res.status(400).json({
// 				message: "Utter Failure! for create",
// 				error: err,
// 			});
// 		return res.status(201).json({
// 			message: "Success",
// 			data: createdPost,
// 		});
// 	});
// };

//edit
const edit = (req, res) => {
  db.Post.findById(req.params.id, (err, foundPost) => {
    if (err)
      return res.status(400).json({
        message: "Utter Failure! for create",
        error: err,
      });

    return res.status(201).json({
      message: "Success with Edit",
      data: foundPost,
    });

    // db.Comment.find({}, (err, foundComments)=> {
    //     if(err) return res.send(err);
    //     res.render('posts/edit', {
    //         post: foundPost,
    //         comments: foundComments,
    //     })
    // })
  });
};

//update // can use this after Users & Comments are created

// const update = (req,res) => {
//     db.Post.findByIdAndUpdate(
//         req.params.id,
//         {
//             $set: {
//                 text: req.body.text,
//             }
//         },
//         { new: true},
//         // (err, updatedPost) => {
//         //     if(err) return res.send (err)
//         //     return res.redirect(`/posts/${updatedPost._id}`)
//         // }
//     )
// }

const update = (req, res) => {
  db.Post.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedPost) => {
      if (err)
        return res.status(400).json({
          message: "Utter Failure! with update",
          error: err,
        });
      return res.status(202).json({
        message: "Success",
        data: updatedPost,
      });
    }
  );
};

//delete // can use this after Users & Comments are created

// const destroy = (req,res) => {
//     db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
//         console.log(deletedPost);
//         if(err) return res.send(err);
//         db.User.findById(deletedPost.user, (err, foundUser) => {
//             console.log(foundUser, 'foundUser');
//             foundUser.posts.remove(deletedPost)
//             foundUser.save()
//             db.Comment.deleteMany({ post: deletedPost._id}, (err, deletedComments) =>{
//                 console.log(deletedComments, 'deleted comments')
//                 if(err) return res.send(err);
//                 res.redirect('/posts');
//             })
//         }
//         )
//     })
// }

const destroy = (req, res) => {
  db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
    if (err)
      return res.status(400).json({
        message: "Utter Failure!",
        error: err,
      });
    return res.status(200).json({
      message: "Success! with Deletion",
      data: deletedPost,
    });
  });
};

module.exports = {
  index,
  show,
  newPost,
  create,
  edit,
  update,
  destroy,
  createPost,
  allPosts,
  userPosts,
};
