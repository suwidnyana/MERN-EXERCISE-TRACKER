import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router ,Route} from 'react-router-dom'


import Navbar from './components/Navbar';
import ExerciseList from './components/exercise-list';
import CreateExerciseList from './components/create-exercise-list';
import EditExerciseList from './components/edit-exercise-list';
import CreateUser from './components/create-user';

function App() {
  return (
  <Router>
    <div className="container">
      <Navbar />
      <Route path="/" exact component={ExerciseList} />
      <Route path="/edit/:id" exact component={EditExerciseList} />
      <Route path="/create" exact component={CreateExerciseList} />
      <Route path="/user" exact component={CreateUser} />
    </div>
  </Router>
   
  );
}

export default App;
