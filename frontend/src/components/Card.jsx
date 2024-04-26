import React from "react";
import { useNavigate, Link } from "react-router-dom";
const Card = ({ propdata }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Link to={`/property/${propdata.apartment_id}`}>
        <h6>image kuch bhi daalde</h6>
        <h1>{propdata.property || "Property Name"}</h1>
        <p>{propdata.num_bedrooms || "Bedrooms"}</p>
        <p>{propdata.num_bathrooms || "Bathrooms"}</p>
        <p>{propdata.parking_spaces || "Parking"}</p>
        <p>{propdata.carpet_area_sqft || "Caarpet Area"}</p>
        <p>{propdata.address || "Address"}</p>
        <p>{propdata.current_price || "Price"}</p>
      </Link>
    </div>
  );
};

export default Card;
