const express = require("express");
const bodyParser = require("body-parser");
const todoRouter = require("./routes/todo.routes");
const db = require("./db");

const app = express();

const port = 3000;

db.connect((error) => {
    if (error) {
        console.log("DB connection failed!");
        console.log(error);
    } else {
        console.log("DB connection successful!");
    }
});

app.use(bodyParser.json());
app.use(express.json());

app.use("/", todoRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
