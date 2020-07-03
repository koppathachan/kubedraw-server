import {
	GraphQLString,
	GraphQLNonNull,
	GraphQLInputObjectType,
	GraphQLInt,
	GraphQLList
} from "graphql";
import { MetadataInputType, LabelInputType } from "./metadata-input";

export const envVarType = new GraphQLInputObjectType({
	name: "envVarType",
	description: "Represents the env in container spec",
	fields: () => ({
		name: { type: GraphQLNonNull(GraphQLString) },
		value: { type: GraphQLNonNull(GraphQLString) }
	})
})

export const ContainerInputType = new GraphQLInputObjectType({
	name: "ContainerInput",
	description: "Represents the container spec in pod",
	fields: () => ({
		name: { type: GraphQLNonNull(GraphQLString) },
		image: { type: GraphQLNonNull(GraphQLString) },
		env: { type: GraphQLList(envVarType) },
		ports: {
			type: new GraphQLInputObjectType({
				name: "Ports",
				fields: () => ({ containerPort: { type: GraphQLNonNull(GraphQLString) } })
			})
		},
	})
})


export const PodTemplateInputType = new GraphQLInputObjectType({
	name: "PodTemplateInput",
	description: "Represents the meta data in k8s objects",
	fields: () => ({
		metadata: { type: GraphQLNonNull(MetadataInputType) },
		spec: { type: GraphQLNonNull(ContainerInputType)}
	})
})

export const DeploymentSelectorInputType = new GraphQLInputObjectType({
	name: "DeploymentSelectorInput",
	description: "Represents the meta data in k8s objects",
	fields: () => ({
		matchLabels: { type: GraphQLNonNull(LabelInputType) }
	})
})

export const DeploymentSpecInputType = new GraphQLInputObjectType({
	name: "DeploymentSpecInput",
	description: "Represents the meta data in k8s objects",
	fields: () => ({
		replicas: { type: GraphQLNonNull(GraphQLInt) },
		selector: { type: GraphQLNonNull(DeploymentSelectorInputType) },
		template: { type: GraphQLNonNull(PodTemplateInputType) }
	})
})
