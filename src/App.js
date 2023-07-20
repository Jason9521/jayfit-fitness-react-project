import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import PersonalInfo from './pages/Personal';
import CreateWorkout from './pages/CreateWorkout';
import ExerciseSearch from './pages/ExerciseSearch';
import Calories from './pages/Calories';


function App() {
  return (
    <div className="App">
        

        <Router>

          <Routes>

            <Route exact path="/" element={<Home/>}></Route>

            <Route path="/personal-info" element={<PersonalInfo/>}></Route>

            <Route path="/create-workouts" element={<CreateWorkout/>}></Route>

            <Route path="/calorie-tracker" element={<Calories/>}></Route>

            <Route path="/exercise-search" element={<ExerciseSearch/>}></Route>

          </Routes>

        </Router>

    </div>
  );
}

export default App;
