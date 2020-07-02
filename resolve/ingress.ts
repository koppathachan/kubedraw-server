import { ClusterDiagram } from "../db/cluster-diagram";
import { ExtensionsV1beta1Ingress } from "@kubernetes/client-node";
import Utils from "../lib/utils/utils"
import { DeployIngress } from "../kube/resolve/ingress"

export class IngressResolvers {
	public static resolve = async (_: any, args: { [argName: string]: any }) => {
		let ingress = new ExtensionsV1beta1Ingress()
		var metadata = args.metadata;
		let diag = new ClusterDiagram("mongodb://localhost:27017")

		metadata["annotations"] && (
			metadata["annotations"] = Utils.geFormattedtMap(metadata["annotations"])
		);
		ingress.kind = "Ingress";
		ingress.apiVersion = args.apiVersion
		ingress.spec = args.spec;
		ingress.metadata = metadata;
		await diag.add(args.cluster, ingress)
		DeployIngress.deployIngress( metadata?.namespace || "default", ingress );
		return ingress;
	}
}
