import express from "express";
import bodyParser from "body-parser";
import {productsRouter} from "./routes/products-router";
import {adressesRouter} from "./routes/addresses-router";

const app = express()
const port = process.env.PORT || 5000




const parserMiddleware = bodyParser({})
app.use(parserMiddleware)



app.use('/products', productsRouter)
app.use('/addresses', adressesRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})