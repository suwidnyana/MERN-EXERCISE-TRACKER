import React, {useState, useEffect} from 'react'
import {post} from 'axios'
import axios from 'axios'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
function CreateExercise  (props) {


    const initialState = { username: '', description: '', duration: 0, date: new Date() }
    const [exercises, setExercise] = useState([initialState])

    function handleChange(event) { 
      setExercise({...exercises, [event.target.name]: event.target.value})
    }
  
    function handleSubmit(event) { 
   
      event.preventDefault();  
    //   if(!exercises.username || !exercises.description ) 
    //   return 
    //   async function postExercises() {
    //     try {
    //       const response = await post(`http://localhost:5000/olahraga/add`, exercises); 
    //       props.history.push(`/olahraga/${response.data._id}`);  
    //     } catch(error) {
    //       console.log('error', error);
    //     }
    //   }
    //   postExercises();
      console.log(exercises)
      axios.post('http://localhost:5000/olahraga/add', exercises)
      .then(res => console.log(res.data));
    
  
    }
  
    function handleCancel() {
      props.history.push("/olahraga");
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
        <div className="form-group">
          <label>Description</label>
          <input name="description" rows="5" value={exercises.description || ""} onChange={handleChange} className="form-control" />
        </div>
        
        <div className="form-group">
          <label>Duration In Minutes</label>
          <input name="duration" rows="5" value={exercises.duration|| ""} onChange={handleChange} className="form-control" />
        </div>
        
        <div className="form-group">
          <label>Date</label>
          {/* <input name="date" rows="5" value={exercises.date|| ""} onChange={handleChange} className="form-control" /> */}
          <DatePicker
              selected={exercises.date}
              onChange={handleChange}
            />
        </div>
        
        
        <div className="btn-group">
          <input type="submit" value="Submit" className="btn btn-primary" />
          
          
          <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
    )

}

export default CreateExercise;