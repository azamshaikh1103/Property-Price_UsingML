import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";

const Propertiespage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/cards")
      .then((response) => {
        setProperties(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <center>
        <h1>This is a Propertiespage</h1>
        <div>
          <Link to="/">Home </Link>
          <Link to="/about">About </Link>
          <Link to="/properties">Properties </Link>
          <Link to="/contact">Contacts </Link>
          <Link to="/login">Login </Link>
          <Link to="/register">Sign up </Link>
          <Link to="/profile">Profile </Link>
        </div>

        <div className="container">
          {loading ? (
            <p>Loading properties...</p>
          ) : (
            properties.map((property) => (
              <Card key={property._id} propdata={property} />
            ))
          )}
        </div>
      </center>
    </>
  );
};

export default Propertiespage;
