//Note: Starter code for getting the server set up using express.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

//ToDO: Set up routes


//ToDo: Set up middleware


//ToDo: Set up configurations


//Note: Starting the express server (listen for incoming http requests through this port)
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});