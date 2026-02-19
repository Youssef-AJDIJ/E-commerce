import { creatConnection, PORT } from "./config/database.js";
import express from "express"



const app = express()
app.use(express.json())


creatConnection()

app.listen(PORT, () =>{
    console.log(`The server is running on port : ${PORT}`);
})

