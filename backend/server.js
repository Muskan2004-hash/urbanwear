const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://mongodb:27017/urbanwear')
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err))

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String
})

const Product = mongoose.model('Product', ProductSchema)

app.get('/', (req, res) => {
  res.send('UrbanWear Backend Running')
})

app.get('/products', async (req, res) => {
  const products = await Product.find()
  res.json(products)
})

app.post('/products', async (req, res) => {
  const product = new Product(req.body)
  await product.save()
  res.json(product)
})

app.listen(5000, () => {
  console.log('Server running on port 5000')
})
