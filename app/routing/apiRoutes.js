const friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        const bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        console.log(req.body);

        const userData = req.body;
        const userScores = userData.scores;

        console.log(userScores);

        let totalDifference = 0;

        //loop through all friends
        for (let i = 0; i < friends.length; i++) {

            // console.log(friends[i]);
            totalDifference = 0;

            //loops all scores
            for (let j = 0; j < friends[i].scores[j]; j++) {

                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                if (totalDifference <= bestMatch.friendDifference) {
                    
                    //our new friend
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;

                }
            }
        }

        //saving user data
        friends.push(userData);

        res.json(bestMatch);

        console.log(bestMatch);
    });


}