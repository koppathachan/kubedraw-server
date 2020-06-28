import { GraphQLObjectType, GraphQLList, GraphQLNonNull } from "graphql";
import { NamespaceType } from "./namespace";
import { V1Namespace } from "@kubernetes/client-node";
import { ClusterDiagram } from "../db/cluster-diagram";
import { MetadataInputType } from "./metadata";

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


export const RootMutationType = new GraphQLObjectType({
	name: "Mutation",
	description: "Root Mutation",
	fields: () => ({
		createNamespace: {
			type: GraphQLNonNull(NamespaceType),
			description: "Add a namespace",
			args: {
				metadata: { type: GraphQLNonNull(MetadataInputType) }
			},
			resolve: async (_, args) => {
				let ns = new V1Namespace();
				ns.kind = "Namespace";
				ns.metadata = args.metadata;
				let diag = new ClusterDiagram("mongodb://localhost:27017")
				await diag.add(ns)
				return ns;
			}
		}
	})
})