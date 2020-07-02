import { V1Namespace } from "@kubernetes/client-node";
import { ClusterDiagram } from "../db/cluster-diagram";
import Utils from "../lib/utils/utils"

export class NamespaceResolvers {
	public static resolve = async (_: any, args: { [argName: string]: any }) => {
		let ns = new V1Namespace();
		args.metadata["annotations"] && (
			args.metadata["annotations"] = Utils.geFormattedtMap(args.metadata["annotations"])
		);
		ns.kind = "Namespace";
		ns.metadata = args.metadata;
		ns.apiVersion = args.apiVersion;
		let diag = new ClusterDiagram("mongodb://localhost:27017")
		await diag.add(args.cluster, ns)
		return ns;
	}
}
