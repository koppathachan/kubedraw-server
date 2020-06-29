import { NamespaceType } from "./namespace";
import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { MetadataInputType } from "./metadata-input";
import { V1Namespace, V1Deployment } from "@kubernetes/client-node";
import { ClusterDiagram } from "../db/cluster-diagram";
import { DeploymentType } from "./deployment";
import { DeploymentSpecInputType } from "./spec-input";

/**
 * Represents the mutation type. A mutation is when you want to change the data(add, update, delete),
 * All api's making modifications to the date must be here.
 */
export const RootMutationType = new GraphQLObjectType({
	name: "Mutation",
	description: "Root Mutation",
	fields: () => ({
		createNamespace: {
			type: GraphQLNonNull(NamespaceType),
			description: "Add a namespace",
			args: { metadata: { type: GraphQLNonNull(MetadataInputType) } },
			resolve: async (_, args) => {
				let ns = new V1Namespace();
				ns.kind = "Namespace";
				ns.metadata = args.metadata;
				let diag = new ClusterDiagram("mongodb://localhost:27017")
				await diag.add(ns)
				return ns;
			}
		},
		createDeployment: {
			type: GraphQLNonNull(DeploymentType),
			description: "Add a deployment",
			args: {
				metadata: {type: GraphQLNonNull(MetadataInputType)},
				spec: {type: GraphQLNonNull(DeploymentSpecInputType)}
			},
			resolve: async (_, args) => {
				let deployment = new V1Deployment();
				deployment.kind = "Deployment";
				deployment.spec = args.spec;
				deployment.metadata = args.metadata;
				let diag = new ClusterDiagram("mongodb://localhost:27017")
				await diag.add(deployment)
				return deployment;
			}
		}
	})
})