import express,{json} from "express"
import "express-async-errors"
import cors from "cors"
import dotenv from "dotenv"
import router from "./routes/index.routes"
dotenv.config()

const app = express()

app.use(cors())
app.use(json())
app.use(router)

const port = process.env.PORT || 5000
app.listen(port,()=>{console.log(`Server running at http://localhost:${port}`)})