import React, {useState, useEffect} from 'react'
import axios from 'axios'

function CreateUser (props) {
  
    const initialState = { username: '' }
    const [username, setUsername] = useState(initialState)
    const [users, setUsers] = useState([]);

    const [ showError, setShowError ] = useState(false)

    function handleChange(event) { 
      setUsername({...username, [event.target.name]: event.target.value})
    }
  
    const getUsers = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/`); 
      
        
        setUsers(response.data);
        console.log(response)
       
      } catch(error) {
        console.log('error', error);
      }}
    
      
    function handleSubmit(event) { 
   
      event.preventDefault();  
   
      console.log(username)
      axios.post('http://localhost:5000/users/add', username)
      .then(res => props.history.push("/create"));
      setUsers('');
      setShowError(true)
  
    }
  
    function handleCancel() {
      props.history.push("/");
    }

    async function handleDelete(id) { 
      try {
        await axios.delete(`http://localhost:5000/users/${id}`); 
        getUsers()
      } catch(error) {
        console.error(error);
      }

    }


    useEffect(() => {
          
      getUsers();
    }, []);


    return(
      <>
        
      <h1>Create Article</h1>
      <hr/>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input name="username" type="text" 
          value={username.username || ""}
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
              <th>Id</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
          {users.map((exercise, index) => (
              <tr key={index}>
                 
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