import { Link } from "react-router-dom";

const Registerpage = () => {
  return (
    <>
      <center>
        <h1>This is a Registerpage</h1>
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

export default Registerpage;
