import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLNonNull,
	GraphQLList,
} from "graphql";
import { HashDataType } from "./hashdata";

/**
 * LabelType represents the label types in k8s objects.
 * i.e. labels, matchLabels
 */
export const LabelType = new GraphQLObjectType({
	name: "Label",
	description: "Represents the label type in k8s objects",
	fields: () => ({
		app: { type: GraphQLNonNull(GraphQLString) }
	})
})

/**
 * MetadataType represents the metatdata part in k8s objects.
 */
export const MetadataType = new GraphQLObjectType({
	name: "Metadata",
	description: "Represents the meta data in k8s objects",
	fields: () => ({
		name: { type: GraphQLNonNull(GraphQLString) },
		labels: { type: LabelType },
		namespace: { type: GraphQLNonNull(GraphQLString) },
		annotations: {
			type: GraphQLList(HashDataType),
			description: "TODO: We put all the shape things here"
		}
	})
})
