const router = require("express").Router();
const ctrl = require('../controllers')


// router.post('/register',async(req,res) => {
//     try {
//      res.json({message:"This is the register route!"})
//     }
//     catch(err) {
//      console.error(err.message)
//     }
//   })
  
//   router.post('/login',async(req,res) => {
//     try {
//      res.json({message:"This is the login route!"})
//     }
//     catch(err) {
//      console.error(err.message)
//     }
//   })


router.post('/register', ctrl.auth.register)
router.post('./login',ctrl.auth.login)

module.exports = router;