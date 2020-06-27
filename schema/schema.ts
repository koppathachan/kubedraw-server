import { GraphQLSchema } from "graphql";
import { RootQueryType } from "./root";


export const Schema = new GraphQLSchema({
	query: RootQueryType
})