import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from "graphql";
import { MetadataType } from "./metadata";
/**
 * DeploymentType represents a deployment object in k8s
 */
export const DeploymentType = new GraphQLObjectType({
	name: "Deployment",
	description: "Represents a Deployment kubernetes object",
	fields: () => ({
		apiVersion: { type: GraphQLNonNull(GraphQLString) },
		kind: { type: GraphQLString },
		metadata: { type: MetadataType }
	})
})