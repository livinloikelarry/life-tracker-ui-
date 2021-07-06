// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import apiClient from "../../services/apiClient";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import ExerciseCard from "../ExerciseCard/ExerciseCard";
import NewExerciseForm from "../NewExerciseForm/NewExerciseForm";
import "./Exercise.css";

export default function Exercise({ user, addExercise }) {
  const [exercises, setExercises] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    const fetchExercises = async () => {
      setIsFetching(true);
      console.log("we are here");
      const { data, error } = await apiClient.listExercises();
      console.log("data", { data });
      if (data) setExercises(data.exercises);
      if (error) setError(error);
      setIsFetching(false);
    };

    fetchExercises();
  }, []);

  return (
    <Container>
      <div className="titleBar">
        <h1 className="title">Exercise</h1>
      </div>
      <div className="contentPage">
        <div className="addExercise">
          <h1>Overview</h1>
          <button className="addExerciseBtn">Add Exercise</button>
        </div>
        <Grid container spacing={3}>
          {exercises?.map((exercise) => (
            <Grid item key={exercise.id} xs={12} md={6} lg={4}>
              <ExerciseCard exercise={exercise} />
            </Grid>
          ))}
        </Grid>
        <div className="exerciseForm">
          <NewExerciseForm user={user} addExercise={addExercise} />
        </div>
      </div>
    </Container>
  );
}
