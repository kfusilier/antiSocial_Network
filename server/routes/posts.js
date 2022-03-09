const router = require('express').Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/auth.required');

router.get('/userPosts', authRequired, ctrl.posts.userPosts);
router.get('/allPosts', ctrl.posts.allPosts);
router.post('/createPost',authRequired, ctrl.posts.createPost);
router.get('/', ctrl.posts.index);
router.get("/:id/comments", ctrl.comments.commentsIdx);
router.get('/new', ctrl.posts.newPost);
router.get('/:id', ctrl.posts.show);
router.get('/:id/edit', ctrl.posts.edit);
router.post('/',  ctrl.posts.create);
router.post("/:id/comments", ctrl.comments.newComments);
router.put('/:id', ctrl.posts.update);
router.delete('/:id', ctrl.posts.destroy);

module.exports = router;
