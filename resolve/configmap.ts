import { ClusterDiagram } from "../db/cluster-diagram";
import { V1ConfigMap } from "@kubernetes/client-node";
import Utils from "../lib/utils/utils"
import { DeployConfigmap } from "../kube/resolve/configmap"

export class ConfigmapResolvers {
	public static resolve = async (_: any, args: { [argName: string]: any }) => {
		let configmap = new V1ConfigMap();
		var metadata = args.metadata;
		let diag = new ClusterDiagram("mongodb://localhost:27017")

		metadata["annotations"] && (
			metadata["annotations"] = Utils.geFormattedtMap(metadata["annotations"])
		);
		configmap.kind = "ConfigMap";
		configmap.apiVersion = args.apiVersion
		configmap.metadata = metadata;
		args.immutable && ( configmap.immutable = args.immutable )
		configmap.data = Utils.geFormattedtMap(args.data);
		await diag.add(args.cluster, configmap)
		DeployConfigmap.deployconfigmap( metadata?.namespace || "default", configmap );
		return configmap;
	}
}
