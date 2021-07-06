import "./Activity.css";

export default function Activity({ user }) {
  // figure out if the user is authenticated
  const isAuthenticated = Boolean(user?.email);
  console.log("isAuthenticated:", isAuthenticated);
  return (
    <div className="Activity">
      <div className="content">
        {isAuthenticated ? <h1>Welcome, {user.email}!</h1> : null}
      </div>
      {/* <div className="contentArea">
        <div className="activityHeader">
          <h1>Activity Feed</h1>
        </div>
        <div className="activityCards">
          <div className="card">Box 1 </div>
          <div className="card">Box 1 </div>
          <div className="card">Box 1 </div>
        </div>
      </div> */}
    </div>
  );
}
