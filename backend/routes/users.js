const router = require('express').Router();

let User = require('../models/user.model');


// router.route('/').get((req, res)     => {
//     User.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(400).json('Error: ' + err));
// })

router.get('/', async (req, res, next) => { //dengan gaya async await
    try {
      const users = await User.find()
      res.json(users);
    } catch (err) {
      //this will eventually be handled by your error handling middleware
      next(err) 
      res.status(400).json('Error:' + err)
    }
  })



// router.route('/add').post((req,res) => {
//     const username = req.body.username;
    
//     const newUser = new User({username});
    
//     newUser.save()
//         .then(() => res.json('User berhasil ditambahkan'))
//         .catch((err => res.status(400).json('Error: ' + err)));
//     })

router.post('/add', async (req, res, next) => { //dengan gaya async await
    
    try {

        
        const username = req.body.username;
        const newUser = new User({username});
        
        const result  = await newUser.save()
        res.json(result)
    } catch (err) {
      //this will eventually be handled by your error handling middleware
      res.status(400).json('Error: ' + err)
    }
  })



module.exports = router;