import React, {useState} from 'react'
import axios from 'axios'

function CreateUser (props) {


    const initialState = { username: '', description: '', duration: 0, date: new Date() }
    const [exercises, setExercise] = useState([initialState])

    function handleChange(event) { 
      setExercise({...exercises, [event.target.name]: event.target.value})
    }
  
    function handleSubmit(event) { 
   
      event.preventDefault();  
   
      console.log(exercises)
      axios.post('http://localhost:5000/users/add', exercises)
      .then(res => props.history.push("/create"));
      setExercise('');

  
    }
  
    function handleCancel() {
      props.history.push("/");
    }
    return(
      <div>
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
      </form>
    </div>
    )

}

export default CreateUser;