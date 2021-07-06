import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

export default function ExerciseCard({ exercise }) {
  return (
    <div>
      <Card elevation={6}>
        <CardHeader
          title={exercise.name}
          subheader={(exercise.timestamp, exercise.name, exercise.name)}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            Your details: Duration: {exercise.duration} & Intensity:{" "}
            {exercise.intensity}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
