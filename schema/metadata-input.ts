import { GraphQLNonNull, GraphQLString, GraphQLInputObjectType } from "graphql";

export const LabelInputType = new GraphQLInputObjectType({
	name: "LabelInput",
	description: "Represents the label type in k8s objects",
	fields: () => ({
		app: { type: GraphQLNonNull(GraphQLString) }
	})
})

export const MetadataInputType = new GraphQLInputObjectType({
	name: "MetadataInput",
	description: "Represents the meta data in k8s objects",
	fields: () => ({
		name: { type: GraphQLNonNull(GraphQLString) },
		labels: { type: GraphQLNonNull(LabelInputType) },
		annotations: {
			type: GraphQLNonNull(GraphQLString),
			description: "TODO: We put all the shape things here"
		}
	})
})