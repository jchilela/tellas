const mongoose = require("mongoose");
//const express = require("express");
const app = express();
// Comentario do Julio CHilela

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server listen on port ", port));
