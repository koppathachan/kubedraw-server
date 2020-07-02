import { ClusterDiagram } from "../db/cluster-diagram";
import { V1ConfigMap } from "@kubernetes/client-node";

export class ConfigmapResolvers {
	public static resolve = async (_: any, args: { [argName: string]: any }) => {
		let configmap = new V1ConfigMap();
		var configmapdata : { [key:string]:string; } = {};
		configmap.kind = "configmap";
		configmap.apiVersion = args.apiVersion
		configmap.metadata = args.metadata;
		args.immutable && ( configmap.immutable = args.immutable )
		for ( let dataset of args.data ) {
			configmapdata[dataset["key"]] = dataset["value"];
		}
		configmap.data = configmapdata;
		let diag = new ClusterDiagram("mongodb://localhost:27017")
		await diag.add(args.cluster, configmap)
		return configmap;
	}
}
