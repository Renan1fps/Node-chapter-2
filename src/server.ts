import express from 'express'
import { router } from './routes'
import swaggerUi from 'swagger-ui-express'
import SwaggerFile from  './swagger.json'
import './database'

//melhorar e dockerizar

const app = express()


app.use(express.json())
app.use(router)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(SwaggerFile))

app.get("/", (request, response)=>{
  response.json({message: "Application running"})
})

app.listen(8000, ()=>{
  console.log("Server running on 8000")
})
