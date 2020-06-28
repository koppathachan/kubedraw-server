import { GraphQLObjectType } from "graphql";
import { MetadataType } from "./metadata";

export const NamespaceType = new GraphQLObjectType({
	name: "Namespace",
	description: "Represents a Namespace kubernetes object",
	fields: () => ({
		//TODO: convert to proper types
		// apiVersion: { type: GraphQLNonNull(GraphQLString) },
		metadata: {
			type: MetadataType,
			description: "Meta data of namespace",
		}
	})
})