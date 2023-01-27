
import * as express from "express"
import { Request, Response } from "express"
import * as bodyParser from "body-parser"
import { myDataSource } from "./app-data-source"
import { commandesRouter } from "./router/commandesRouter"
import { usersRouter } from "./router/UsersRouter"
import { restaurantsRouter } from "./router/restaurantsRouter"

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

app.use('/*', (req, res) => {
    res.status(404).json({
        status: 'FAIL',
        message: "Ce nom de domaine n'existe pas",
        data: null
    })
});


/* app.get("/users", async function (req: Request, res: Response) {
    const users = await myDataSource.getRepository(User).find()
    res.json(users)
})

app.get("/users/:id", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(User).findOneBy({
        id: parseInt(req.params.id),
    })
    return res.send(results)
})

app.post("/users", async function (req: Request, res: Response) {
    const user = await myDataSource.getRepository(User).create(req.body)
    const results = await myDataSource.getRepository(User).save(user)
    return res.send(results)
})

app.put("/users/:id", async function (req: Request, res: Response) {
    const user = await myDataSource.getRepository(User).findOneBy({
        id: parseInt(req.params.id),
    })
    myDataSource.getRepository(User).merge(user, req.body)
    const results = await myDataSource.getRepository(User).save(user)
    return res.send(results)
})

app.delete("/users/:id", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(User).delete(req.params.id)
    return res.send(results)
}) */

// start express server
app.listen(3000)