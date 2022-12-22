const express = require("express");
const { dbConnection } = require("./config/dbConnection");
const GlobalMiddelWareErorr = require("./utils/globalMiddelwareErorr");

require('dotenv').config()
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use("/api/v1/users", require("./apis/user.api"));
app.use("/api/v1/drivers", require("./apis/driver.api"));

app.all("*", (req, res, next) => {

    next(new appErorr(`falied to find url :${req.originalUrl} on server`, 404))
   
})
app.use(GlobalMiddelWareErorr)
dbConnection()
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
