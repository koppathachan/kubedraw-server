import {
	GraphQLInputObjectType, GraphQLInt,
	GraphQLNonNull, GraphQLString, GraphQLList
} from "graphql"
import { LabelInputType } from "./metadata-input"

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
