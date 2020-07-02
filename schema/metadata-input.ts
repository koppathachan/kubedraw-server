import { GraphQLNonNull, GraphQLString, GraphQLInputObjectType, GraphQLList } from "graphql";
import { HashDataInputType } from "./hashdata-input";

export const LabelInputType = new GraphQLInputObjectType({
	name: "LabelInput",
	description: "Represents the label type in k8s objects",
	fields: () => ({
		app: { type: GraphQLString }
	})
})

export const MetadataInputType = new GraphQLInputObjectType({
	name: "MetadataInput",
	description: "Represents the meta data in k8s objects",
	fields: () => ({
		name: { type: GraphQLNonNull(GraphQLString) },
		labels: { type: LabelInputType },
		namespace: { type: GraphQLString },
		annotations: {
			type: GraphQLList(HashDataInputType),
			description: "TODO: We put all the shape things here"
		}
	})
})
