import { GraphQLObjectType, GraphQLList } from "graphql";
import { NamespaceObjectType } from "./namespace";

export const RootQueryType = new GraphQLObjectType({
	name: "Query",
	description: "Root Query",
	fields: () => ({
		namespaces: {
			type: new GraphQLList(NamespaceObjectType),
			description: "List of namespaces",
			//TODO: this will come from the saved configuration.
			resolve: () => [{
				apiVersion: "v1",
				name: "test"
			}]
		}
	})
})