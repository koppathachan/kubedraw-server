import { GraphQLObjectType } from "graphql";

/**
 * AnnotationType represents the annotations part of metadata.
 * As per k8s documentation any client data can be stored here.
 * In our case that data will be the ui visualisation data.
 */
export const AnnotationType = new GraphQLObjectType({
	name :"Annotations",
	fields: () => ({
		
	})
})