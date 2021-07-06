import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ user, setUser, setAppState }) {
  const navigate = useNavigate();
  const isAuthenticated = Boolean(user?.email);
  const handleOnLogout = () => {
    setAppState({});
    setUser({});
    navigate("/");
  };

  const button = isAuthenticated ? (
    <button className="btn primary" onClick={handleOnLogout}>
      Logout
    </button>
  ) : (
    <Link to="/login">
      <button className="btn primary">Login</button>
    </Link>
  );

  return (
    <nav className="Navbar">
      <ul className="logo">
        <li>
          <Link to="/">
            <h1 className="leafLogo">🍃 </h1>
            <h2>Life Tracker</h2>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/activity">
            <h5>Activity</h5>
          </Link>
        </li>
        <li>
          <Link to="/exercises">
            <h5>Exercise</h5>
          </Link>
        </li>
        <li>
          <Link to="/nutrition">
            <h5>Nutrition</h5>
          </Link>
        </li>
        <li>
          <Link to="/sleep">
            <h5>Sleep</h5>
          </Link>
        </li>
        {user?.email ? (
          <li>
            <button className="btn primary" onClick={handleOnLogout}>
              Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">
                <button className="btn ghost">Login</button>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <button className="btn primary">Register</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
