const router = require('express').Router();

let olahraga   = require('../models/exercise.model');




router.get('/', async (req, res, next) => { //dengan gaya async await
    try {
      const olahragas = await olahraga.find()
      res.json(olahragas);
    } catch (err) {
      //this will eventually be handled by your error handling middleware
      next(err) 
      res.status(400).json('Error:' + err)
    }
  })


// router.route('/').get((req, res, next)     => {
// //    const olahraga  = await olahraga.find()
//     // .then(olahragas => res.json(olahragas))
//     // .catch(err => res.status(400).json('Error: ' + err));
//     try {
//         const olahraga  = await olahraga.find()
//         res.json(olahraga);
//     }
//     catch (err) {
//         res.status(400).json('Error:' + err)
//     }
// })

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newOlahraga = new olahraga({
    username,
    description,
    duration,
    date,
    });
    
    newOlahraga.save()
        .then(() => res.json('Olahraga berhasil ditambahkan'))
        .catch((err => res.status(400).json('Error: ' + err)));
    })

    router.route('/:id').get((req, res)     => {
        olahraga.findById(req.params.id)
        .then(olahragas => res.json(olahragas))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    
    router.route('/:id').delete((req, res)     => {
        olahraga.findByIdAndDelete(req.params.id)
        .then(() => res.json(`olahraga dihapus`))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    
    
    router.route('/update/:id').post((req, res)     => {
        olahraga.findById(req.params.id)
        .then(olahragas => {
            olahragas.username = req.body.username;
            olahragas.description = req.body.description;
            olahragas.duration = Number(req.body.duration);
            olahragas.date = Date.parse(req.body.date);
            
        olahragas.save()
        .then(() => res.json('Olahraga berhasil diupdate'))
        .catch((err => res.status(400).json('Error: ' + err)));
   
        })
        .catch(err => res.status(400).json('Error: ' + err));
    })



module.exports = router;