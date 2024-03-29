// import express from 'express';
const express = require('express');

// // import {getExercises, addExercise, deleteExercise, searchExercise} from '../controllers/exercises.js' 
const exercisesController = require("../controllers/exercises");

const router = express.Router();

router.get('/', exercisesController.getExercises);
router.post('/add', exercisesController.addExercise);
router.delete('/:id', exercisesController.deleteExercise);
router.get('/:id', exercisesController.searchExercise)

// // export default router;
module.exports = router



// router.route('/add').post((req,res) => {
//     const username = req.body.username;
//     const description = req.body.description;
//     const duration = Number(req.body.duration);
//     const date = Date.parse(req.body.date);

//     const newOlahraga = new olahraga({
//     username,
//     description,
//     duration,
//     date,
//     });
    
//     newOlahraga.save()
//         .then(() => res.json('Olahraga berhasil ditambahkan'))
//         .catch((err => res.status(400).json('Error: ' + err)));
//     })

//  router.route('/:id').get((req, res)     => {
//         olahraga.findById(req.params.id)
//         .then(olahragas => res.json(olahragas))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
    
//     router.route('/:id').delete((req, res)     => {
//         olahraga.findByIdAndDelete(req.params.id)
//         .then(() => res.json(`olahraga dihapus`))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
    
    
//     router.route('/update/:id').post((req, res)     => {
//         olahraga.findById(req.params.id)
//         .then(olahragas => {
//             olahragas.username = req.body.username;
//             olahragas.description = req.body.description;
//             olahragas.duration = Number(req.body.duration);
//             olahragas.date = Date.parse(req.body.date);
            
//         olahragas.save()
//         .then(() => res.json('Olahraga berhasil diupdate'))
//         .catch((err => res.status(400).json('Error: ' + err)));
   
//         })
//         .catch(err => res.status(400).json('Error: ' + err));
//     })


