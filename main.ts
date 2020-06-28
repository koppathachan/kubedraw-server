import express from "express"
import graphqlHTTP from "express-graphql"
import { Schema } from "./schema/schema"
const app = express()

app.use("/", graphqlHTTP({
	graphiql: true,
	schema: Schema
}))

app.listen(50051, () => console.log(`Server started at 5000. Open: http://localhost:50051`))
