import express from "express"
import graphqlHTTP from "express-graphql"
import { Schema } from "./schema/schema"
const app = express()
const PORT = 50051
/**
 * The entire server is a graphql server. No other path.
 */
app.use("/", graphqlHTTP({
	graphiql: true,
	schema: Schema
}))

app.listen(PORT, () => console.log(`Server started. Open: http://localhost:${PORT}`))
