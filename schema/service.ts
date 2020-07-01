import {
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLString
} from "graphql";
import { MetadataType } from "./metadata";

/**
 * ServiceType represents a service object in k8s that is used to expose
 * a deployment.
 */
export const ServiceType = new GraphQLObjectType({
	name: "Service",
	description: "Represents a Service kubernetes object",
	fields: () => ({
		apiVersion: { type: GraphQLNonNull(GraphQLString) },
		kind: { type: GraphQLString },
		metadata: { type: MetadataType },
	})
})
