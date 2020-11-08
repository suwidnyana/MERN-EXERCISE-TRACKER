import React, { useState, useEffect } from 'react';
import  axios  from 'axios';
import { Link } from 'react-router-dom';

function ExerciseList(props) {

    const [exercises, setExercise] = useState([])

    
  
  const getExercise = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/olahraga/`); 
    
      
      setExercise(response.data);
      console.log(response)
     
    } catch(error) {
      console.log('error', error);
    }}
    
    useEffect(() => {
        
      getExercise();
    }, []);


    // useEffect(function() {
    //   axios.get(`http://localhost:5000/olahraga/`)
    //     .then(function(response) {
    //       setExercise(response.data);
    //       console.log(response.data)
    //     })
    //     .catch(function (error) {
    //       console.log('error', error);
    //     });
    // }, [props]);
    

    async function handleDelete(id) { 
      try {
        await axios.delete(`http://localhost:5000/olahraga/${id}`); 
        getExercise()
      } catch(error) {
        console.error(error);
      }

    }
   
    return(
      <div>
        <div >
          <table className="table">
          <thead className="thead-light">
            <tr>
              {/* <th>Id</th> */}
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {exercises.map((exercise) => (
              <tr key={exercise._id}>
                  {/* <th>{exercise._id}</th> */}
                  <th>{exercise.username}</th>
                  <th>{exercise.description}</th>
                  <th>{exercise.duration}</th>
                  <th> <button onClick={() => handleDelete(exercise._id)} className="btn btn-danger mr-3">Delete</button>
                   
                   <Link to={`/edit/${exercise._id}`} className="btn btn-danger">Edit</Link> </th>
              </tr>
          ))}
          </tbody>
          </table>             
          <hr/>
          
          
        
        </div>
      
    
    </div>
    
    )

}

export default ExerciseList;