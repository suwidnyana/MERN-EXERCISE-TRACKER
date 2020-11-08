import React, {useState, useEffect} from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


function EditExerciseList  (props) {


    const initialState = { username: '', description: '', duration: 0, date: new Date() }
    const [exercises, setExercise] = useState([initialState])
    const [users, setUsers] = useState([]);

    const getExercises = async() => {
       let res = await axios.get(`http://localhost:5000/olahraga/${props.match.params.id}`)
       console.log(res.data)
       setExercise({...exercises, 
                        username: res.data.username,
                        description: res.data.description,
                        duration: res.data.duration,
                        date: new Date(res.data.date),
                                    })
    }

    const getUsers = async () => {
        let res = await axios.get(`http://localhost:5000/users`)
        setUsers(res.data)

    }

    
    useEffect(  ()  => 
    { getExercises()
        getUsers()
    }, []);

    function handleChange(event) { 
      console.log(event.target.name);
      setExercise({...exercises, [event.target.name]: event.target.value})
    }


    function handleDatePicker(event) 
    {
      setExercise({...exercises, date: event})

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
      axios.post(`http://localhost:5000/olahraga/update/${props.match.params.id}`, exercises)
      .then(res => props.history.push("/"));

    
  
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
          {/* <input name="username" type="text" 
          value={exercises.username || ""}
          onChange={handleChange} 
          className="form-control" /> */}


        <select name="username" className="" onChange={handleChange}>
         {users.map((user) => (
          <option key={user._id} value={user.username} defaultValue={exercises.username === user.username}>
          {user.username}
          </option>

         ))}
        </select>

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
          <DatePicker
              selected={exercises.date}
              onChange={handleDatePicker}
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

export default EditExerciseList;