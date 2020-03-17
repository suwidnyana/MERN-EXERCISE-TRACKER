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
              <table className="table">
              <thead className="thead-light">
                <tr>
                  {/* <th>Id</th> */}
                  <th>Username</th>
                  <th>Description</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                      {/* <th>{exercise._id}</th> */}
                      <th>{exercise.username}</th>
                      <th>{exercise.description}</th>
                      <th>{exercise.duration}</th>
                  </tr>
              </tbody>
              </table>             
              <hr/>
              
              
              {/* <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table> */}
            </div>
          )     
        })}
      </div>
    )

}

export default ExerciseList;