// import { Link } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";
import apiClient from "../../services/apiClient";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import ExerciseCard from "../ExerciseCard/ExerciseCard";
import NewExerciseForm from "../NewExerciseForm/NewExerciseForm";
import "./Exercise.css";

export default function Exercise({ user }) {
  const [exercises, setExercises] = useState([]);
  const [showForm, setShowForm] = useState(false);
  // this use effect will make an api call
  useEffect(() => {
    const fetchExercises = async () => {
      const { data } = await apiClient.listExercises();
      if (data) setExercises(data.exercises);
    };

    fetchExercises();
  }, []);

  // for removing and displaying form
  if (user.email) {
    return (
      <Container>
        <div className="titleBar">
          <h1 className="title">Exercise</h1>
        </div>
        <div className="contentPage">
          <div className="addExercise">
            <h1>Overview</h1>
            <button
              className="addExerciseBtn"
              onClick={() => setShowForm((prev) => !prev)}
            >
              Add Exercise
            </button>
          </div>
          <Grid container spacing={3}>
            {exercises?.map((exercise) => (
              <Grid item key={exercise.id} xs={12} md={6} lg={4}>
                <ExerciseCard exercise={exercise} />
              </Grid>
            ))}
          </Grid>
          <div className="exerciseForm">
            {showForm ? (
              <NewExerciseForm
                showForm={showForm}
                user={user}
                setShowForm={setShowForm}
                setExercises={setExercises}
              />
            ) : null}
          </div>
        </div>
      </Container>
    );
  } else {
    return <h1>PLEASE LOG IN</h1>;
  }
}
