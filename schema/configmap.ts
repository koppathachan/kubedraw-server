import {
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLList,
	GraphQLBoolean
} from "graphql";
import { MetadataType } from "./metadata";
import { HashDataType } from "./hashdata";

/**
 * ServiceType represents a service object in k8s that is used to expose
 * a deployment.
 */
export const ConfigmapType = new GraphQLObjectType({
	name: "Configmap",
	description: "Represents a Configmap kubernetes object",
	fields: () => ({
		apiVersion: { type: GraphQLNonNull(GraphQLString) },
		metadata: { type: MetadataType },
		kind: { type: GraphQLString },
		immutable: { type: GraphQLBoolean },
		data: { type: GraphQLList(HashDataType) }
	})
})

