import { Link } from "react-router-dom";

const Contactpage = () => {
  return (
    <>
      <center>
        <h1>This is a Contactpage</h1>
        <div>
          <Link to="/">Home </Link>
          <Link to="/about">About </Link>
          <Link to="/properties">Properties </Link>
          <Link to="/contact">Contacts </Link>
          <Link to="/login">Login </Link>
          <Link to="/register">Sign up </Link>
          <Link to="/profile">Profile </Link>
        </div>
      </center>
    </>
  );
};

export default Contactpage;
