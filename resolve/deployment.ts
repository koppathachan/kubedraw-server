import { ClusterDiagram } from "../db/cluster-diagram";
import { V1Deployment } from "@kubernetes/client-node";
import Utils from "../lib/utils/utils"

export class DeploymentResolvers {
	public static resolve = async (_: any, args: { [argName: string]: any }) => {
		let deployment = new V1Deployment();
		args.metadata["annotations"] && (
			args.metadata["annotations"] = Utils.geFormattedtMap(args.metadata["annotations"])
		);
		args.spec["template"]["metadata"]["annotations"] && (
			args.spec["template"]["metadata"]["annotations"] = Utils.geFormattedtMap(args.spec["template"]["metadata"]["annotations"])
		);
		deployment.kind = "Deployment";
		deployment.spec = args.spec;
		deployment.apiVersion = args.apiVersion;
		deployment.metadata = args.metadata;
		let diag = new ClusterDiagram("mongodb://localhost:27017")
		await diag.add(args.cluster, deployment)
		return deployment;
	}
}
