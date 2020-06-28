import { GraphQLSchema } from "graphql";
import { RootQueryType, RootMutationType } from "./root";


export const Schema = new GraphQLSchema({
	query: RootQueryType,
	mutation: RootMutationType
})