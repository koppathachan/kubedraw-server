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
export const IngressType = new GraphQLObjectType({
	name: "Ingress",
	description: "Represents Ingress kubernetes object",
	fields: () => ({
		apiVersion: { type: GraphQLNonNull(GraphQLString) },
		kind: { type: GraphQLString },
		metadata: { type: MetadataType },
	})
})
