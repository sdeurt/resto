
import * as express from "express"
import { Request, Response } from "express"
import * as bodyParser from "body-parser"
import { myDataSource } from "./app-data-source"
import { commandesRouter } from "./router/commandesRouter"
import { usersRouter } from "./router/usersRouter"
import { restaurantsRouter } from "./router/restaurantsRouter"
import { menusRouter } from "./router/menusRouter"

// establish database connection
myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

// create and setup express app
const app = express()
app.use(express.json())


// register routes
app.use('/api/commandes', commandesRouter);
app.use('/api/users', usersRouter);
app.use('/api/restaurants', restaurantsRouter);
app.use('/api/menus', menusRouter);

app.use(function (req, res, next) {

    res.setHeader('authorization','');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use('/*', (req, res) => {
    res.status(404).json({
        status: 'FAIL',
        message: "Ce nom de domaine n'existe pas",
        data: null
    })
});

/* 
app.get("/users", async function (req: Request, res: Response) {
    const users = await myDataSource.getRepository(usersRouter).find()
    res.json(users)
})

app.get("/users/:id", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(usersRouter).findOneBy({
        id: parseInt(req.params.id),
    })
    return res.send(results)
})

app.post("/users", async function (req: Request, res: Response) {
    const user = await myDataSource.getRepository(usersRouter).create(req.body)
    const results = await myDataSource.getRepository(usersRouter).save(user)
    return res.send(results)
})

app.put("/users/:id", async function (req: Request, res: Response) {
    const user = await myDataSource.getRepository(usersRouter).findOneBy({
        id: parseInt(req.params.id),
    })
    myDataSource.getRepository(usersRouter).merge(user, req.body)
    const results = await myDataSource.getRepository(usersRouter).save(user)
    return res.send(results)
})

app.delete("/users/:id", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(usersRouter).delete(req.params.id)
    return res.send(results)
})  */

// start express server
app.listen(3000)