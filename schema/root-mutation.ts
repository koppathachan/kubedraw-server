import { NamespaceType } from "./namespace";
import { GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLList } from "graphql";
import { MetadataInputType } from "./metadata-input";
import { DeploymentType } from "./deployment";
import { DeploymentSpecInputType } from "./deployment-input";
import { NamespaceResolvers } from "../resolve/namespace";
import { DeploymentResolvers } from "../resolve/deployment";
import { ServiceType } from "./service";
import { ServiceSpecInputType } from "./service-input";
import { IngressType } from "./ingress";
import { IngressSpecInputType } from "./ingress-input";
import { IngressResolvers } from "../resolve/ingress";
import { ServiceResolvers } from "../resolve/service";
import { SecretType } from "./secret";
import { HashDataInputType } from "./hashdata-input";
import { ConfigmapType } from "./configmap";

/**
 * Represents the mutation type. A mutation is when you want to change the data(add, update, delete),
 * All api's making modifications to the date must be here.
 */
export const DesignRootMutationType = new GraphQLObjectType({
	name: "DesignMutation",
	description: "Design Root Mutation",
	fields: () => ({
		createNamespace: {
			type: GraphQLNonNull(NamespaceType),
			description: "Add a namespace",
			//arguments to the resolve method right below. This will come from the client api.
			args: {
				apiVersion: { type: GraphQLNonNull(GraphQLString) },
				cluster: { type: GraphQLNonNull(GraphQLString), description: "Name of the cluster that is being designed" },
				metadata: { type: GraphQLNonNull(MetadataInputType) }
			},
			resolve: NamespaceResolvers.resolve
		},
		createDeployment: {
			type: GraphQLNonNull(DeploymentType),
			description: "Add a deployment",
			args: {
				apiVersion: { type: GraphQLNonNull(GraphQLString) },
				cluster: { type: GraphQLNonNull(GraphQLString), description: "Name of the cluster that is being designed" },
				metadata: { type: GraphQLNonNull(MetadataInputType) },
				spec: { type: GraphQLNonNull(DeploymentSpecInputType) }
			},
			resolve: DeploymentResolvers.resolve
		},
		createService: {
			type: GraphQLNonNull(ServiceType),
			description: "Add a service",
			args: {
				apiVersion: { type: GraphQLNonNull(GraphQLString) },
				cluster: { type: GraphQLNonNull(GraphQLString), description: "Name of the cluster that is being designed" },
				metadata: { type: GraphQLNonNull(MetadataInputType) },
				spec: { type: GraphQLNonNull(ServiceSpecInputType) }
			},
			resolve: ServiceResolvers.resolve
		},
		createIngress: {
			type: GraphQLNonNull(IngressType),
			description: "Add a Ingress",
			args: {
				apiVersion: { type: GraphQLNonNull(GraphQLString) },
				cluster: { type: GraphQLNonNull(GraphQLString), description: "Name of the cluster that is being designed" },
				metadata: { type: GraphQLNonNull(MetadataInputType) },
				spec: { type: GraphQLNonNull(IngressSpecInputType) }
			},
			resolve: IngressResolvers.resolve
		},
		createSecret: {
			type: GraphQLNonNull(SecretType),
			description: "Add a secret",
			args: {
				apiVersion: { type: GraphQLNonNull(GraphQLString) },
				cluster: { type: GraphQLNonNull(GraphQLString), description: "Name of the cluster that is being designed" },
				metadata: { type: GraphQLNonNull(MetadataInputType) },
				type: { type: GraphQLString },
				data: { type: GraphQLNonNull(GraphQLList(HashDataInputType)) }
			},
			resolve: DeploymentResolvers.resolve
		},
		createConfigmap: {
			type: GraphQLNonNull(ConfigmapType),
			description: "Add a configmap",
			args: {
				apiVersion: { type: GraphQLNonNull(GraphQLString) },
				cluster: { type: GraphQLNonNull(GraphQLString), description: "Name of the cluster that is being designed" },
				metadata: { type: GraphQLNonNull(MetadataInputType) },
				data: { type: GraphQLNonNull(GraphQLList(HashDataInputType)) }
			},
			resolve: DeploymentResolvers.resolve
		}
	})
})

/**
 * ClusterRootMutationType represents the modification to a cluster. 
 * for eg to deploy a created cluster this is what is used.
 */
export const ClusterRootMutationType = new GraphQLObjectType({
	name: "ClusterMutation",
	description: "Cluster Root Mutation",
	fields: () => ({
		deploy: {
			type: GraphQLBoolean,
			description: "deploys a created cluster to minikube.",
			args: {
				cluster: { type: GraphQLString }
			},
			resolve: (_, args) => {
				args.cluster  // 
			}
		}
	})
})
