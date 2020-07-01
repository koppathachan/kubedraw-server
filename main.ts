import express from "express"
import graphqlHTTP from "express-graphql"
import { DesignSchema, ClusterSchema } from "./schema/schema"
const app = express()
const PORT = 50051
/**
 * The path of all the design apis. We will use this to save, edit in the design phase
 */
app.use("/design", graphqlHTTP({
	graphiql: true,
	schema: DesignSchema
}))

/**
 * The path of cluster apis. We will use this to export/generate yaml files for cluster
 * once the design is done
 */
app.use("/cluster", graphqlHTTP({
	graphiql: true,
	schema: ClusterSchema
}))

app.listen(PORT, () => console.log(`Server started. Open http://localhost:${PORT}/design or	http://localhost:${PORT}/cluster`))
