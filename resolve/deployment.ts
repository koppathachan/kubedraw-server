import { ClusterDiagram } from "../db/cluster-diagram";
import { V1Deployment } from "@kubernetes/client-node";

export class DeploymentResolvers {
	public static resolve = async (_: any, args: { [argName: string]: any }) => {
		let deployment = new V1Deployment();
		deployment.kind = "Deployment";
		deployment.spec = args.spec;
		deployment.metadata = args.metadata;
		let diag = new ClusterDiagram("mongodb://localhost:27017")
		await diag.add(args.cluster, deployment)
		return deployment;
	}
}
