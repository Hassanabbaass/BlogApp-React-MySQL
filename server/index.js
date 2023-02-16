const express = require('express');
const cookieParser = require('cookie-parser');

const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")
const userRoute = require("./routes/users")

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)
app.use("/api/user", userRoute)



app.listen(8800, ()=> {
    console.log("Server is Running")
})