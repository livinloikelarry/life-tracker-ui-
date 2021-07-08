import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default function ExerciseCard({ exercise }) {
  return (
    <Card elevation={6}>
      <CardContent>
        <Typography variant="h5" color="textSecondary" component="h2">
          {exercise.name}
          <br />
          Your details:
          <br />
          Duration: {exercise.duration} & Intensity: {exercise.intensity}
        </Typography>
      </CardContent>
    </Card>
  );
}
