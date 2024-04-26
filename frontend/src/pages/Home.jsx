import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <center>
        <h1>This is a Homepage</h1>
        <div>
          <Link to="/">Home </Link>
          <Link to="about">About </Link>
          <Link to="/properties">Properties </Link>
          <Link to="/contact">Contacts </Link>
          <Link to="/login">Login </Link>
          <Link to="/register">Sign up </Link>
          <Link to="/profile">Profile </Link>
        </div>

        <div>
          <h4>No backend required here </h4>{" "}
        </div>
      </center>
    </>
  );
};

export default Homepage;
