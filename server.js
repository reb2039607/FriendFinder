const express = require('express')
const app = express();
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

// app/json parser
const jsonParser = bodyParser.json();

//urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false});

app.use(bodyParser.json({ type: "application/++json" }));
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));;


require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


//will need to install these, working on no internet currently
//WILL NEED TO DO NPM INIT FOR PACKAGE.JSON!

