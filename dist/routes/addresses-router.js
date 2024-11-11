"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adressesRouter = void 0;
const express_1 = require("express");
exports.adressesRouter = (0, express_1.Router)({});
const addresses = [{ id: 1, value: 'Nezalejnosti 12' }, { id: 2, value: 'Selickaga 12' }];
exports.adressesRouter.get('/', (req, res) => {
    res.send(addresses);
});
exports.adressesRouter.get('/:id', (req, res) => {
    let address = addresses.find(p => p.id === +req.params.id);
    if (address) {
        res.send(address);
    }
    else {
        res.send(404);
    }
});
