import { ClusterDiagram } from "../db/cluster-diagram";
import { V1Deployment } from "@kubernetes/client-node";
import Utils from "../lib/utils/utils"

export class DeploymentResolvers {
	public static resolve = async (_: any, args: { [argName: string]: any }) => {
		let deployment = new V1Deployment();
		var metadata = args.metadata;
		var spec = args.spec;
		let diag = new ClusterDiagram("mongodb://localhost:27017")

		metadata["annotations"] && (
			metadata["annotations"] = Utils.geFormattedtMap(metadata["annotations"])
		);
		spec["template"]["metadata"]["annotations"] && (
			spec["template"]["metadata"]["annotations"] = Utils.geFormattedtMap(spec["template"]["metadata"]["annotations"])
		);
		deployment.kind = "Deployment";
		deployment.spec = spec;
		deployment.apiVersion = args.apiVersion;
		deployment.metadata = metadata;
		await diag.add(args.cluster, deployment)
		return deployment;
	}
}
