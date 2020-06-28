import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLNonNull,
	GraphQLInputObjectType
} from "graphql";

export const MetadataType = new GraphQLObjectType({
	name: "Metadata",
	description: "Represents the meta data in k8s objects",
	fields: () => ({
		name: { type: GraphQLNonNull(GraphQLString) },
		annotations: {
			type: GraphQLNonNull(GraphQLString),
			description: "TODO: We put all the shape things here"
		}
	})
})

export const MetadataInputType = new GraphQLInputObjectType({
	name: "MetadataInput",
	description: "Represents the meta data in k8s objects",
	fields: () => ({
		name: { type: GraphQLNonNull(GraphQLString) },
		annotations: {
			type: GraphQLNonNull(GraphQLString),
			description: "TODO: We put all the shape things here"
		}
	})
})