const { text } = require("express");
const db = require("../models");
const Post = require("../models/Post");

// can use this after Users & Comments are created
const index = (req, res) => {
  db.Post.find().exec((err, allPosts) => {
    if (err)
      return res.status(400).json({
        message: "Utter Failure! for INDEX",
        error: err,
      });
    return res.status(200).json({
      message: "Success pulling posts!",
      data: allPosts,
    });
  });
};

// show
const show = (req, res) => {
	db.Post.findById(req.params.id)
  .populate('user', "_id screenName email")
  .exec((err, foundPosts) => {
    if (err) return res.status(400).json({
      message: "Failed to find Posts",
      error: err,
    })
    return res.status(200).json({
      message: "Success in show Posts",
      data: foundPosts,
    })
  })
}

const create = async (req, res) => {
  const post = new db.Post({
    text: req.body.text,
    user: req.userId
  });
   db.Post.create(post,(err, createdPost) =>{
    if(err) return res.status(400).json({
      message: "Failed to Create",
      error: err,
    })
    db.User.findById(createdPost.user)
    .exec((err, foundUser) => {
      if(err) return res.status(400).json({
        message: "Faile to create Post with User",
        error: err
      })
      foundUser.post.push(createdPost)
      foundUser.save()
    })
    return res.status(200).json({
      message: "Success in Creating Post",
      data: createdPost,
    })
  });
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
    user: req.userId,
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
  });
};


const update = (req, res) => {
  let post = {
    text: req.body.text,
    user: req.userId
  }
  db.Post.findByIdAndUpdate( 
    req.params.id,
    post,
    {new:true},
    (err, updatePost) => {
      if(err) return res.status(400).json({
        message: "Failed to Update",
        error: err
      })
      return res.status(202).json({
        message:"Successfully Update",
        data: updatePost,
      })
    }
  )
};

//delete // can use this after Users & Comments are created
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


// ========= New Set of Controller ===========

const indexPost = (req,res) =>{
  db.Post.find()
  .populate('user')
  .exec((err, allPosts) => {
    if(err) return res.status(400).json({
      message: "Utter Failure for INDEX",
      error:err,
    })
    return res.status(200).json({
      message: "Success in INDEX",
      data: allPosts,
    })
  })
}



module.exports = {
  index,
  show,
  create,
  edit,
  update,
  destroy,
  createPost,
  allPosts,
  userPosts,
  indexPost,
};
