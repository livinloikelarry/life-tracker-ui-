import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import axios from "axios";
import apiClient from "../../services/apiClient";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Activity from "../Activity/Activity";
import "./App.css";
import Exercise from "../Exercise/Exercise";

function App() {
  const [appState, setAppState] = useState({});
  const [user, setUser] = useState({});
  const [exercises, setExercises] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    // once the app runs fetch exercises
    const fetchExercises = async () => {
      setIsFetching(true);
      const { data, error } = await apiClient.listExercises();
      console.log({ data });
      if (data) setExercises(data.exercises);
      if (error) setError(error);

      setIsFetching(false);
    };

    fetchExercises();
  }, []);

  const addExercise = (newExercise) => {
    setExercises((oldExercises) => [newExercise, ...oldExercises]);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await apiClient.fetchUserFromToken();
      if (data) setUser(data.user);
      if (error) setError(error);
    };
    const token = localStorage.getItem("life_tracker_token");
    if (token) {
      apiClient.setToken(token);
      fetchUser();
    }
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user} setUser={setUser} setAppState={setAppState} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={<Register setUser={setUser} user={user} />}
          />
          <Route
            path="/login"
            element={<Login setUser={setUser} user={user} />}
          />
          <Route path="/activity" element={<Activity user={user} />} />
          <Route
            path="/exercises"
            element={
              <Exercise
                user={user}
                error={error}
                exercises={exercises}
                setExercises={setExercises}
                setIsFetching={setIsFetching}
                setError={setError}
                addExercise={addExercise}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
