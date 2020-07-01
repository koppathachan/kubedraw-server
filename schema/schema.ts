import { GraphQLSchema } from "graphql";
import { DesignRootQueryType, ClusterRootQueryType } from "./root-query";
import { DesignRootMutationType, ClusterRootMutationType } from "./root-mutation";

/**
 * This is where it all starts. Here we define the queries we want to
 * run on our graphql, and the mutations(data changes) we want to make.
 */
export const DesignSchema = new GraphQLSchema({
	query: DesignRootQueryType,
	mutation: DesignRootMutationType
})

/**
 * This is the part what connects to a cluster and modifies an existing cluster.
 */
export const ClusterSchema = new GraphQLSchema({
	query: ClusterRootQueryType,
	mutation: ClusterRootMutationType
})
