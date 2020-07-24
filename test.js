const fs = require("fs");

const google = fs.readfileSync("package.json","utf-8");

fs.close();

const obj = JSON.parse(google);

obj["author"] = "google";

fs.writeFileSync("package.json","utf-8", obj)
