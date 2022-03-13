const db = require("../models");
const User = require("../models/User");

const index = (req, res) => {
  db.User.find({}, (err, allUsers) => {
    if (err)
      return res.status(400).json({
        message: "Utter Failure! for INDEX",
        error: err,
      });
    return res.status(200).json({
      message: "Success!",
      data: allUsers,
    });
  });
};

const show = (req, res) => {
 db.User.findById(req.params.id)
 .populate('post')
 .exec((err, foundUser) => {
   if(err)
   return res.status(400).json({
     message: "Fail to find User",
     error: err
   })
   return res.status(200).json({
     message: "Success Found Show User",
     data: foundUser
   })
 })
 
  // db.User.findById(req.params.id, (err, foundUser) => {
  //   if (err)
  //     return res.status(400).json({
  //       message: "Utter Failure on user Show!",
  //       error: err,
  //     });
  //   return res.status(201).json({
  //     message: "Success",
  //     data: foundUser,
  //   });
  // });
};

const create = (req, res) => {
  db.User.create(req.body, (err, createdUser) => {
    if (err)
      return res.status(400).json({
        message: "Utter Failure! on user create",
        error: err,
      });
    return res.status(201).json({
      message: "Success",
      data: createdUser,
    });
  });
};



const update = (req, res) => {
  let userData;
  userData = {
    screenName: req.body.screenName,
  }
  db.User.findByIdAndUpdate(
    req.params.id,
    userData,
    { new: true },
    (err, updatedUser) => {
      if (err)
        return res.status(400).json({
          message: "Utter Failure in update user!",
          error: err,
        });
      return res.status(202).json({
        message: "Success!",
        data: updatedUser,
      });
    }
  );
};

const destroy = (req, res) => {
  db.User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
    if (err)
      return res.status(400).json({
        message: "Utter Failure on user delete!",
        error: err,
      });
    return res.status(200).json({
      message: "Success!",
      data: deletedUser,
    });
  });
};

const follow = (req, res) => {
  db.User.findByIdAndUpdate(
    req.body.followId,
    {
      $push: { followers: req.user._id },
    },
    { new: true },
    (error, result) => {
      if (error)
        return res.status(422).json({
          message: "Failed Follow",
          error: error,
        });
      db.User.findByIdAndUpdate(
        req.user._id,
        {
          $push: { following: req.body.followId },
        },
        { new: true }
      )
        .then((result) => {
          res.json(result);
        })
        .catch((err) => {
          return res.status(422).json({ error: err });
        });
    }
  );
};



module.exports = {
  index,
  show,
  create,
  update,
  destroy,
  follow,
};
