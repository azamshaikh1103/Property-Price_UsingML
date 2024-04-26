import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PropertyDetailsPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showRemainingMonths, setShowRemainingMonths] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/properties`)
      .then((response) => {
        const data = response.data;
        const foundProperty = data.find(
          (property) => property.apartment_id === parseInt(id)
        );

        if (foundProperty) {
          setProperty(foundProperty);
        } else {
          console.log(`Property with ID ${id} not found`);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching property details:", error);
        setLoading(false);
      });
  }, [id]);

  const handleShowData = () => {
    setShowRemainingMonths(true);
  };

  if (loading) {
    return <p>Loading property details...</p>;
  }

  if (!property) {
    return <p>Property not found</p>;
  }

  let priceData = [
    {
      name: "Mar23",
      locality: property.locality_price_Mar23,
      property: property.property_price_Mar23,
    },
    {
      name: "Apr23",
      locality: property.locality_price_Apr23,
      property: property.property_price_Apr23,
    },
    {
      name: "May23",
      locality: property.locality_price_May23,
      property: property.property_price_May23,
    },
    {
      name: "Jun23",
      locality: property.locality_price_Jun23,
      property: property.property_price_Jun23,
    },
    {
      name: "Jul23",
      locality: property.locality_price_Jul23,
      property: property.property_price_Jul23,
    },
    {
      name: "Aug23",
      locality: property.locality_price_Aug23,
      property: property.property_price_Aug23,
    },
    {
      name: "Sep23",
      locality: property.locality_price_Sept23,
      property: property.property_price_Sept23,
    },
    {
      name: "Oct23",
      locality: property.locality_price_Oct23,
      property: property.property_price_Oct23,
    },
    {
      name: "Nov23",
      locality: property.locality_price_Nov23,
      property: property.property_price_Nov23,
    },
    {
      name: "Dec23",
      locality: property.locality_price_Dec23,
      property: property.property_price_Dec23,
    },
    {
      name: "Jan24",
      locality: property.locality_price_Jan24,
      property: property.property_price_Jan24,
    },
    {
      name: "Feb24",
      locality: property.locality_price_Feb24,
      property: property.property_price_Feb24,
    },
    {
      name: "Mar24",
      locality: property.locality_price_Mar24,
      property: property.property_price_Mar24,
    },
  ];

  // If showRemainingMonths is true, add the remaining 3 months to the priceData array
  if (showRemainingMonths) {
    priceData = [
      ...priceData,
      {
        name: "Apr24",
        locality: property.locality_price_Apr24,
        property: property.property_price_Apr24,
      },
      {
        name: "May24",
        locality: property.locality_price_May24,
        property: property.property_price_May24,
      },
      {
        name: "Jun24",
        locality: property.locality_price_June24,
        property: property.property_price_June24,
      },
    ];
  }

  return (
    <div>
      <h1>{property.property || "Property Name"}</h1>
      <p>{property.num_bedrooms || "Bedrooms"}</p>
      <p>{property.num_bathrooms || "Bathrooms"}</p>
      <p>{property.parking_spaces || "Parking"}</p>
      <p>{property.carpet_area_sqft || "Carpet Area"}</p>
      <p>{property.address || "Address"}</p>
      <p>{property.current_price || "Price"}</p>

      <button onClick={handleShowData}>Predict</button>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={priceData}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.5} />
          <XAxis dataKey="name" stroke="#666" />
          <YAxis domain={["auto", "auto"]} stroke="#666" />{" "}
          {/* Automatically determine domain for Y-axis */}
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="locality"
            stroke="#FF5733"
            strokeWidth={2}
            dot={{
              stroke: "#FF5733",
              strokeWidth: 2,
              fill: "#FFF",
              fillOpacity: 0.8,
            }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="property"
            stroke="#33FF57"
            strokeWidth={2}
            dot={{
              stroke: "#33FF57",
              strokeWidth: 2,
              fill: "#FFF",
              fillOpacity: 0.8,
            }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PropertyDetailsPage;
