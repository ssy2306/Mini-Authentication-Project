const express = require("express");
const cors = require("cors");
const app = express();
const port = 4001;
var escapeHtml = require("escape-html");
var session = require("express-session");
const express_session = require("./auth/express_session/express_session.js");
const cookieParser = require("cookie-parser");
const welcomeRoute = require('./routes/welcomeRoute.js');
const userRoutes = require('./routes/userRoutes.js');
const testRoutes = require('./routes/testRoutes.js')
app.use(cookieParser());
app.use(express_session); //to use express-session middleware defined in express_session folder

app.use(express.json()); //convert all incoming requests to json
app.use(cors({ credentials: true })); //abiding by cors policy


app.use("/", welcomeRoute, userRoutes, testRoutes);

app.listen(port, () => {
    console.log("Server started at port ", port);
});