import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from "graphql";
import { MetadataType } from "./metadata";

/**
 * Represents a namespace in kuberenetes.
 */
export const NamespaceType = new GraphQLObjectType({
	name: "Namespace",
	description: "Represents a Namespace kubernetes object",
	fields: () => ({
		apiVersion: { type: GraphQLNonNull(GraphQLString) },
		kind: { type: GraphQLNonNull(GraphQLString) },
		metadata: { type: MetadataType }
	})
})