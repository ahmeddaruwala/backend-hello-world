import express from 'express'
import { products } from './productData.mjs'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, response) => {
  response.send(`Hello World from Ahmed!`)
})

app.get('/products', (req, response) => {

  // response.send({name: "lemon", price: 150, quantity: "1kg"})

  response.send(products)
})
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})