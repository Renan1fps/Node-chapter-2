import express from 'express'

const app = express()

app.use(express.json())

app.get("/", (request, response)=>{
  response.json({message: "Hello word"})
})

app.listen(8000, ()=>{
  console.log("Server running on 8000")
})