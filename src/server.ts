import express from 'express'
import { categoriesRoutes } from './routes/categories.routes'
import { specificationRoutes } from './routes/specification.routes'

const app = express()

app.use(express.json())
app.use(categoriesRoutes)
app.use(specificationRoutes)

app.get("/", (request, response)=>{
  response.json({message: "Hello word"})
})

app.listen(8000, ()=>{
  console.log("Server running on 8000")
})