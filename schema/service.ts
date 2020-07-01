import {
	GraphQLObjectType, GraphQLNonNull,
	GraphQLString, GraphQLInputObjectType, GraphQLInt, GraphQLList
} from "graphql";
import { MetadataType } from "./metadata";
import { LabelInputType } from "./metadata-input";

export const ServicePortsType = new GraphQLInputObjectType({
	name: "ServicePorts",
	fields: () => ({
		targetPort: { type: GraphQLNonNull(GraphQLInt) },
		protocol: { type: GraphQLNonNull(GraphQLString) },
		port: { type: GraphQLNonNull(GraphQLInt) }
	})
})

export const ServiceSpecInputType = new GraphQLInputObjectType({
	name: "ServiceSpecInputType",
	description: "Represents the meta data in k8s objects",
	fields: () => ({
		selector: { type: GraphQLNonNull(LabelInputType) },
		ports: { type: GraphQLList(ServicePortsType) }
	})
})


/**
 * ServiceType represents a service object in k8s that is used to expose
 * a deployment.
 */
export const ServiceType = new GraphQLObjectType({
	name: "Service",
	description: "Represents a Service kubernetes object",
	fields: () => ({
		apiVersion: { type: GraphQLNonNull(GraphQLString) },
		kind: { type: GraphQLString },
		metadata: { type: MetadataType },
	})
})
