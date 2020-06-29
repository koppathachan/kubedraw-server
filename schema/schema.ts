import { GraphQLSchema } from "graphql";
import { RootQueryType } from "./root-query";
import { RootMutationType } from "./root-mutation";

/**
 * This is where it all starts. Here we define the queries we want to
 * run on our graphql, and the mutations(data changes) we want to make.
 */
export const Schema = new GraphQLSchema({
	query: RootQueryType,
	mutation: RootMutationType
})