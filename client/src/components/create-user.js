import React, {useState, useEffect} from 'react'
import axios from 'axios'

function CreateUser (props) {


    const initialState = { username: '' }
    const [exercises, setExercise] = useState([initialState])
    const [ showError, setShowError ] = useState(false)

    function handleChange(event) { 
      setExercise({...exercises, [event.target.name]: event.target.value})
    }
  
    const getExercise = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/`); 
      
        
        setExercise(response.data);
        console.log(response)
       
      } catch(error) {
        console.log('error', error);
      }}
      
      useEffect(() => {
          
        getExercise();
      }, []);
      
    function handleSubmit(event) { 
   
      event.preventDefault();  
   
      console.log(exercises)
      axios.post('http://localhost:5000/users/add', exercises)
      .then(res => props.history.push("/create"));
      setExercise('');
      setShowError(true)
  
    }
  
    function handleCancel() {
      props.history.push("/");
    }

    async function handleDelete(id) { 
      try {
        await axios.delete(`http://localhost:5000/users/${id}`); 
        getExercise()
      } catch(error) {
        console.error(error);
      }

    }
    return(
      <>
        
      <h1>Create Article</h1>
      <hr/>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input name="username" type="text" 
          value={exercises.username || ""}
          onChange={handleChange} 
          className="form-control" />
        </div>  
        <div className="btn-group">
          <input type="submit" value="Submit" className="btn btn-primary mr-3" />
          <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
        </div>
        {showError ? (<div className="alert alert-success mt-3">Berhasil</div>) : null }

      </form>
      <hr/>

      <h1>List User</h1>
      <table className="table">
          <thead className="thead-light">
            <tr>
              {/* <th>Id</th> */}
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
          {exercises.map((exercise, index) => (
              <tr key={index}>
                  {/* <th>{exercise._id}</th> */}
                  <th>{exercise.username}</th>
                  <th> <button onClick={() => handleDelete(exercise._id)} className="btn btn-danger mr-3">Delete</button></th>
              </tr>
          ))}
          </tbody>
          </table>   
    </>
    )

}

export default CreateUser;