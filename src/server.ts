import express from 'express'
import { router } from './routes'

const app = express()

app.use(express.json())
app.use(router)


app.get("/", (request, response)=>{
  response.json({message: "Application running"})
})

app.listen(8000, ()=>{
  console.log("Server running on 8000")
})