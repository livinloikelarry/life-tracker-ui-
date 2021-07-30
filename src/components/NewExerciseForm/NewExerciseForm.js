import { useState } from "react";
import apiClient from "../../services/apiClient";
// import NotAllowed from "../NotAllowed/NotAllowed";
import "./NewExerciseForm.css";

export default function NewExerciseForm({
  showForm,
  setShowForm,
  setExercises,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // this way we will have an array of all of our exercises
  const addExercise = (newExercise) => {
    setExercises((oldExercises) => [newExercise, ...oldExercises]);
  };
  const [form, setForm] = useState({
    name: "",
    category: "",
    duration: "",
    intensity: "",
  });

  const handleOnInputChange = (event) => {
    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // so the form does not show after submission
    setShowForm(false);

    const { data, error } = await apiClient.createCard({
      name: form.name,
      category: form.category,
      duration: form.duration,
      intensity: form.intensity,
    });
    if (error) setError(error);
    if (data) {
      addExercise(data.exercise);
      // set to a blank form
      setForm({ name: "", category: "", duration: "", intensity: "" });
    }
    setIsLoading(false);
  };

  const renderForm = () => {
    return (
      <div className="form">
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name of Exercise"
            value={form.name}
            onChange={handleOnInputChange}
          />
        </div>

        <div className="input-field">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="category"
            placeholder="Exercise Category"
            value={form.category}
            onChange={handleOnInputChange}
          />
        </div>

        <div className="input-field">
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            name="duration"
            placeholder="duration"
            value={form.duration}
            onChange={handleOnInputChange}
          />
        </div>

        <div className="input-field">
          <label htmlFor="Intensity">Intensity</label>
          <input
            type="text"
            name="intensity"
            placeholder="intensity"
            value={form.intensity}
            onChange={handleOnInputChange}
          />
        </div>

        <button className="btn" disabled={isLoading} onClick={handleOnSubmit}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </div>
    );
  };

  return (
    <div className="NewExerciseForm">
      <div className="card">
        <h2>Add Exercise</h2>

        {Boolean(error) && <span className="error">{error}</span>}

        {renderForm()}
      </div>
    </div>
  );
}
