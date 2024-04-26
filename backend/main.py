from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import pandas as pd
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
from fastapi.middleware.cors import CORSMiddleware
import pickle

app = FastAPI()

# Load the trained model
with open("datamodel.pkl", "rb") as file:
    final_model_lr = pickle.load(file)

optimal_degree = 1

# Define request and response models using Pydantic
class InputData(BaseModel):
    num_bedrooms: int
    num_bathrooms: int
    parking_spaces: int
    proximity_to_transport: float
    proximity_to_market: float
    proximity_to_schools: float
    neighborhood_rating: float
    year_built: int
    security: bool
    power_backup: bool
    lift: bool
    rain_water_harvesting: bool
    swimming_pool: bool
    park: bool
    waste_disposal: bool
    mini_cinema: bool
    earthquake_resistance: bool
    club_house: bool
    solar_energy: bool
    event_space: bool
    gymnasium: bool
    vaastu_compliant: bool
    internet_wifi_connectivity: bool
    bar_lounge: bool
    piped_gas: bool
    jogging_and_strolling_track: bool
    grand_entrance_lobby: bool
    cctv_camera: bool
    indoor_games_room: bool
    carpet_area_sqft: int
    floor: int
    current_price: int
    registration_charges: int
    booking_amount: int
    locality_price_Mar23: int
    locality_price_Apr23: int
    locality_price_May23: int
    locality_price_Jun23: int
    locality_price_Jul23: int
    locality_price_Aug23: int
    locality_price_Sept23: int
    locality_price_Oct23: int
    locality_price_Nov23: int
    locality_price_Dec23: int
    locality_price_Jan24: int
    locality_price_Feb24: int
    property_price_Mar23: int
    property_price_Apr23: int
    property_price_May23: int
    property_price_Jun23: int
    property_price_Jul23: int
    property_price_Aug23: int
    property_price_Sept23: int
    property_price_Oct23: int
    property_price_Nov23: int
    property_price_Dec23: int
    property_price_Jan24: int
    property_price_Feb24: int
    furnishing_semifurnished: bool
    furnishing_unfurnished: bool
    transaction_type_Resale: bool
    facing_North: bool
    facing_NorthEast: bool

class OutputData(BaseModel):
    predicted_price: float


# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to the appropriate origin URL of your React frontend
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


# Define a route for the prediction endpoint
@app.post('/predict', response_model=OutputData)
async def predict(input_data: InputData):
    # Convert input data to DataFrame
    df_new = pd.DataFrame(input_data.dict(exclude_unset=True), index=[0])
    
    # Use PolynomialFeatures to transform the features
    poly = PolynomialFeatures(degree=optimal_degree, include_bias=False)
    X_new_poly = poly.fit_transform(df_new)

    # Make predictions
    predicted_price = final_model_lr.predict(X_new_poly)[0]
    
    # Return the predicted price
    return {'predicted_price': int(predicted_price)}

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)