import { GraphQLObjectType, GraphQLList } from "graphql";
import { NamespaceType } from "./namespace";
import { ClusterDiagram } from "../db/cluster-diagram";

/**
 * Represents the graphql root query. All queries will be build on this.
 * Nothing here must modify the data
 */
export const RootQueryType = new GraphQLObjectType({
	name: "Query",
	description: "Root Query",
	fields: () => ({
		namespaces: {
			type: new GraphQLList(NamespaceType),
			description: "List of namespaces",
			resolve: async () => {
				return new ClusterDiagram("mongodb://localhost:27017").get("Namespace")
			}
		}
	})
})