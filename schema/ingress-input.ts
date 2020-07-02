import {
	GraphQLInputObjectType, GraphQLInt,
	GraphQLNonNull, GraphQLString, GraphQLList
} from "graphql"

export const BackendType = new GraphQLInputObjectType({
	name: "BackendType",
	fields: () => ({
		serviceName: { type: GraphQLNonNull(GraphQLString) },
		servicePort: { type: GraphQLNonNull(GraphQLInt) }
	})
})

export const PathType = new GraphQLInputObjectType({
	name: "PathType",
	fields: () => ({
		path: { type: GraphQLNonNull(GraphQLString) },
		backend : { type: BackendType }
	})
})

export const HttpType = new GraphQLInputObjectType({
	name: "HttpType",
	fields: () => ({
		paths: { type: GraphQLList(PathType) }
	})
})

export const RulesType = new GraphQLInputObjectType({
	name: "RulesType",
	fields: () => ({
		host: { type: GraphQLNonNull(GraphQLString) },
		http: { type: GraphQLNonNull(HttpType) }
	})
})

export const IngressSpecInputType = new GraphQLInputObjectType({
	name: "IngressSpecInputType",
	description: "Represents the meta data in k8s objects",
	fields: () => ({
		rules: { type: GraphQLList(RulesType) }
	})
})
