import mysql from "mysql2/promise"
import dotenv from "dotenv"

dotenv.config()
export const PORT = process.env.PORT || 3000
const pool = mysql.createPool({
    database: process.env.DATABASE || "movil_shop",
    host: process.env.HOST || "localhost",
    port: process.env.PORT || "3306",
    user: process.env.USER || "ajdij",
    password: process.env.PASSWORD || "",
    queueLimit: 1,
    connectionLimit: 10,
    waitForConnections: true
})

export async function creatConnection(){
    try{
        const conn = await pool.getConnection()
        conn.release()
        
        console.log("✅ Connect successfully");
    }
    catch(error){
        console.log(`❌ Can't connect : ${error }`);
    }


}