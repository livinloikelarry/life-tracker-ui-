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
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      console.log("fetch user was started");
      const { data, error } = await apiClient.fetchUserFromToken();
      if (data) setUser(data.user);
      if (error) setError(error);
    };
    const token = localStorage.getItem("life_tracker_token");
    console.log("the token:", token);
    if (token) {
      apiClient.setToken(token);
      console.log("about to call fetchUser");
      fetchUser();
    }
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/register"
            element={<Register setUser={setUser} user={user} />}
          />
          <Route
            exact
            path="/login"
            element={<Login setUser={setUser} user={user} />}
          />
          <Route path="/activity" element={<Activity user={user} />} />
          <Route exact path="/exercises" element={<Exercise user={user} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
