import express from 'express'
import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from './config/db.js'
import dotenv from 'dotenv'
import rateLimit from './config/upstash.js'
import rateLimiter from './middleware/rateLimiter.js'
import cors from 'cors'

dotenv.config()

const app = express();
const port = process.env.PORT || 3000

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json()); //middleware
app.use((req,res,next)=>{
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    next();
})
app.use(rateLimiter)
app.use("/api/notes",notesRoutes)
 
connectDB().then(()=>{
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})
})








