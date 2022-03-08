const router = require('express').Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/auth.required');

router.get('/allPosts', ctrl.posts.allPosts);
router.get('/', ctrl.posts.index);

router.post('/createPost',authRequired, ctrl.posts.createPost);
router.get('/userPosts', authRequired, ctrl.posts.userPosts);
router.get('/new', ctrl.posts.newPost);
router.get('/:id', ctrl.posts.show); 
router.get('/:id/edit', ctrl.posts.edit);
router.post('/',  ctrl.posts.create);
router.put('/:id', ctrl.posts.update);
router.delete('/:id', ctrl.posts.destroy);


router.get("/:id/comments", ctrl.comments.commentsIdx);
router.get("/:id/comments/:id", ctrl.comments.show); // ok
router.get("/:id/comments/:id/edit", ctrl.comments.editComment);
router.post("/:id/comments", ctrl.comments.newComments);
router.put("/:id/comments/:id", ctrl.comments.updateComment);
router.delete("/:id/comments/:id", ctrl.comments.destroyComments);



module.exports = router;


