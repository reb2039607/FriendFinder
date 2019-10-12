const friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    
    app.post("/api/friends", function(req, res) {
        const bestMatch = {
name = "",
photo = "",
friendDifference: 1000
        };
console.log(req.body);

const userData = req.body;
const userScores = userData.scores;

console.log(userScores);

const totalDifference = 0;




    });


}