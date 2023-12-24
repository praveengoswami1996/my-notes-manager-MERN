const express = require("express");
const cors = require("cors");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectWithDB = require("./config/dbConfig");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

//Creating an express instance
const app = express();

//Configuring dotenv module so that we can access the environment variables throughout the application
dotenv.config();

//Connecting with MongoDB
connectWithDB();

const PORT = process.env.PORT || 5000;

//CORS (Cross Origin Resource Sharing) Configuration
//The server sets these CORS headers to inform the browser about the permissions it grants to web pages served from other origins
const CORSOptions = {
    origin: "http://localhost:3000",
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}

//Middlewares
app.use(cors(CORSOptions));
/*
    by using app.use(cors(CORSOptions));, you are telling Express to use the cors middleware for all routes in your application, and to apply the CORS configuration specified in the CORSOptions object. This middleware will add the necessary headers to responses to handle cross-origin requests according to the specified configuration.
*/

app.use(express.json())
/*
    express.json() is a middleware in Express.js that parses incoming requests with JSON payloads. When a client sends data to the server with a Content-Type header of application/json, this middleware parses the incoming JSON data and makes it available in the req.body object.

    app.use(express.json()); is telling Express to use the express.json() middleware for all incoming requests, enabling the server to parse and access JSON data sent in the request body.
*/

app.use("/api/users", userRoutes);


app.get("/", (req, res) => {
    res.send("API is running....")
})

app.get("/api/notes", (req, res) => {
    res.json(notes);
})

app.use(notFound);
app.use(errorHandler);

//Creating basic server in node js using express
app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`)
})