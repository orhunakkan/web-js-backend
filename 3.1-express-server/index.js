// This line imports the Express.js framework using ES6 import syntax
import express from "express";
// Then we set express as the main function to be used.
const app = express();

// The "listen" method is used to bind and listen to the connections on the specified host and port.
app.listen(3000, () => {
    // This callback function will be executed once the server is running.
    console.log("Server running on port 3000.");
});