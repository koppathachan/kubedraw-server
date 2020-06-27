import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";

export const NamespaceObjectType = new GraphQLObjectType({
	name: "Namespace",
	description: "Represents a Namespace kubernetes object",
	fields: () => ({
		//TODO: convert to proper types
		apiVersion: { type: GraphQLNonNull(GraphQLString) },
		name: { type: GraphQLNonNull(GraphQLString) }
	})
})