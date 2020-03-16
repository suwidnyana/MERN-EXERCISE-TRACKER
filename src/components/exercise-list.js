import React, { useState, useEffect } from 'react';
import  axios  from 'axios';
import { Link } from 'react-router-dom';

function ExerciseList() {

    const [exercises, setExercise] = useState([])

    useEffect(function() {
      async function getExercise() {
        try {
          const response = await axios.get(`http://localhost:5000/olahraga`);
          setExercise(response.data);
        } catch(error) {
          console.log('error', error);
        }
      }        
      getExercise();
    }, []);


    return(
        
        <div>
        <h2>
          Olahraga
        </h2>
        <hr/>
        {exercises.map((exercise) => {
          return(
            <div key={exercise._id}>
              <small>_id: {exercise._id}</small>
              <small>username: {exercise.username}</small>
              <small>description: {exercise.description}</small>
              <small>duration: {exercise.duration}</small>
              <hr/>
            </div>
          )     
        })}
      </div>
    )

}

export default ExerciseList;