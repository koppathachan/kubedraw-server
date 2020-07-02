import { GraphQLNonNull, GraphQLString, GraphQLInputObjectType } from "graphql";

export const HashDataInputType = new GraphQLInputObjectType({
	name: "HashDataInput",
	description: "Represents the secrets data in k8s secrets",
	fields: () => ({
		key: { type: GraphQLNonNull(GraphQLString) },
		value: { type: GraphQLNonNull(GraphQLString) }
	})
})
