const path = require("path");
const fs = require("fs");
const dbpath = path.join(__dirname, "db.json");

let rawData = fs.readFileSync(dbpath);
let elements = JSON.parse(rawData);

//const filepath = path.join(__dirname, "realdb.json");

//fs.writeFile(filepath, data, function(err) {
 // err ? console.log(err) : console.log("Mock DB created.");
//});






