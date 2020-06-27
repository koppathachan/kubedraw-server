import express from "express"
import graphqlHTTP from "express-graphql"
import { Schema } from "./schema/schema"
import * as yaml from "js-yaml";
import * as fs from "fs"
import * as path from "path"

const app = express()

app.use("/", graphqlHTTP({
	graphiql: true,
	schema: Schema
}))

try {
	var jsonObj = yaml.safeLoadAll(fs.readFileSync(path.resolve(__dirname, "./dist/chartnamehere.k8s.yaml"), "utf-8"))
	fs.writeFileSync(`dist/chartnamehere.k8s.json`, JSON.stringify(jsonObj, null, 4))

} catch (ex) {
	console.log(ex)
}

app.listen(5000, () => console.log(`Server started at 5000`))