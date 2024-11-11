import {Request, Response, Router} from "express";


export const adressesRouter = Router({})
const addresses = [{id: 1, value: 'Nezalejnosti 12'}, {id: 2, value: 'Selickaga 12'}]

adressesRouter.get('/', (req: Request, res: Response) => {
    res.send(addresses)
})
adressesRouter.get('/:id', (req: Request, res: Response) => {
    let address = addresses.find(p => p.id === +req.params.id)
    if (address) {
        res.send(address)
    } else {
        res.send(404)
    }
})
