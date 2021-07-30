import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  avatar: {
    backgroundColor: green[500],
  },
}));

const theme = createTheme({
  typography: {
    fontSize: 20,
  },
});

export default function ExerciseCard({ exercise }) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {exercise.intensity}
            </Avatar>
          }
          subheader={exercise.category}
          title={exercise.name}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Name of exercise: {exercise.name}
            <br />
            Exercise category: {exercise.category}
            <br />
            Duration: {exercise.duration}
            <br />
            Intensity: {exercise.intensity}
          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
