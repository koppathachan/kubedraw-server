import {
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLString
} from "graphql";
/**
 * DataType represents the ke, value pairs in k8s secret value.
 * i.e. for data or stringData
 */
export const HashDataType = new GraphQLObjectType({
	name: "HashData",
	description: "Represents the key, value pairs in k8s secret value",
	fields: () => ({
		key: { type: GraphQLNonNull(GraphQLString) },
		value: { type: GraphQLNonNull(GraphQLString) }
	})
})
