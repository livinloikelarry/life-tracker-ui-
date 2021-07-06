// code from vaccine hub starter
// import { Link } from "react-router-dom";
import "./Home.css";
// const runningBg =
//   "https://images.unsplash.com/flagged/photo-1556746834-cbb4a38ee593?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80";

export default function Home() {
  return (
    <div className="Home">
      <div className="jumbo">
        <h1 className="heading">Life Tracker</h1>
        <h3 className="subheading">
          Helping you take back control of your world
        </h3>
        <div className="infoIcons">
          <h5>Fitness</h5>
          <h5>Food</h5>
          <h5>Rest</h5>
          <h5>Planner</h5>
        </div>
      </div>
      {/* <div className="media">
        <img src={runningBg} alt="man running" />
      </div> */}
    </div>
  );
}
