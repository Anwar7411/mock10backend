
| POST | /api/register | This endpoint  allows users to register.

PAYLOAD FOR LOGIN:{
    name:"anwar",
    email:"anwar@gmail.com",
    password:"anwar"
}

| POST | /api/login | This endpoint  allows users to login.

PAYLOAD FOR LOGIN:{
    email:"anwar@gmail.com",
    password:"anwar"
}

| GET | /api/flights | This endpoint returns a list of all available flights.

| POST | /api/flights/addflights | This endpoint  allow users to add new flights to the system.

PAYLOAD FOR FLIGHT:{
  airline: String,
  flightNo: String,
  departure: String,
  arrival: String,
  departureTime: Date,
  arrivalTime: Date,
  seats: Number,
  price: Number
}

| GET | /api/flights/:flightid | This endpoint  return the details of a specific flight identified by its ID. 

| PUT / PATCH | /api/flights/edit/:flightid| This endpoint allow users to update the details of a specific flight identified by its ID.

| DELETE | /api/delete/:flightid | This endpoint should allow users to delete a specific flight identified by its ID.

for next routes user should be loggedin first, because middleware has been added to authorize user.

Firstly user need to login with email and password the generated token should be added in the headdres with key as "authorization" and value should be "bearer token" 
Note: for passing token in headdres use bearer space and generated token.


for booking payload should pass in the formate= {
     "flight":"flightsID"
}

NOTE: USER ID WILL BE TAKEN FROM JSONWEBTOKEN JUST PROVIDE FLIGHT ID WITH flight KEY

| POST | /api/booking | This endpoint should allow the user to book flights.

| GET | /api/dashboard | This point should list all the bookings so far with the user and flight details.


