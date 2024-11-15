"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const products_router_1 = require("./routes/products-router");
const addresses_router_1 = require("./routes/addresses-router");
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
const parserMiddleware = (0, body_parser_1.default)({});
app.use(parserMiddleware);
app.use('/products', products_router_1.productsRouter);
app.use('/addresses', addresses_router_1.adressesRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
