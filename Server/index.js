const express = require("express");
const app = express();
const port = 5000
const userRoutes = require("./Routes/userRoutes")

app.use("/api/v1/user/",userRoutes)


app.listen(port,()=>{
    console.log(`Server running on port${port}`);
})