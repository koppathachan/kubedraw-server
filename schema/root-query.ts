import { GraphQLObjectType, GraphQLList, GraphQLString } from "graphql";
import { NamespaceType } from "./namespace";
import { ClusterDiagram } from "../db/cluster-diagram";

/**
 * Represents the graphql root query. All queries will be build on this.
 * Nothing here must modify the data
 */
export const DesignRootQueryType = new GraphQLObjectType({
	name: "DesignQuery",
	description: "Root Query",
	fields: () => ({
		namespaces: {
			type: new GraphQLList(NamespaceType),
			description: "List of namespaces",
			args: { cluster: { type: GraphQLString } },
			resolve: async (_, args) => {
				let cluster = args.cluster || "cluster"
				return new ClusterDiagram("mongodb://localhost:27017").get(cluster, "namespace")
			}
		}
	})
})


export const ClusterRootQueryType = new GraphQLObjectType({
	name: "ClusterQuery",
	description: "Cluster Root query to query an existing cluster",
	fields: () => ({
		cluster: {
			type: GraphQLString,
			description: "TODO: get all the resources in the cluster",
			args: {cluster: {type: GraphQLString}},
			resolve: (_, args) => args.name + " : cannot get not implemented."
		},
		exportYaml: {
			type: GraphQLString,
			description: "gets the yaml for cluster.",
			args: {
				cluster: { type: GraphQLString }
			},
			resolve: () => "This should be replaced with the yaml contents"
		}
	})
})
