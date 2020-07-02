import { ClusterDiagram } from "../db/cluster-diagram";
import { V1beta1IngressClass } from "@kubernetes/client-node";

export class IngressResolvers {
	public static resolve = async (_: any, args: { [argName: string]: any }) => {
		let ingress = new V1beta1IngressClass();
		ingress.kind = "Ingress";
		ingress.apiVersion = args.apiVersion
		ingress.spec = args.spec;
		ingress.metadata = args.metadata;
		let diag = new ClusterDiagram("mongodb://localhost:27017")
		await diag.add(args.cluster, ingress)
		return ingress;
	}
}
