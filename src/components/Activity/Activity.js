import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Activity.css";

export default function Activity({ user }) {
  if (user.email) {
    return (
      <div className="ActivityPage">
        <div className="actions">
          <h2 className="heading">Activity Feed</h2>
          {/* buttons */}
          <div className="buttons">
            <button className="Button outline orange ">Add Exercise</button>
            <button className="Button outline blue ">Log Sleep</button>
            <button className="Button outline green ">Record Nutrition</button>
          </div>
          {/* end of buttons */}
        </div>
        <div className="stats">
          {/* start of stat cards */}
          <div className="main">
            <div className="SummaryStat orange">
              <div className="background">
                <p>Total Exercise Minutes</p>
                <h1>47</h1>
              </div>
            </div>
            <div className="SummaryStat blue">
              <div className="background">
                <p>Avg Sleep Hours</p>
                <h1>0.58</h1>
              </div>
            </div>
            <div className="SummaryStat green">
              <div className="background">
                <p>Avg Daily Calories</p>
                <h1>0</h1>
              </div>
            </div>
            {/* end of stat cards */}
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>PLEASE LOG IN</h1>;
  }
}
