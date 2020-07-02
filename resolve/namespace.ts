import { V1Namespace } from "@kubernetes/client-node";
import { ClusterDiagram } from "../db/cluster-diagram";
import Utils from "../lib/utils/utils"

export class NamespaceResolvers {
	public static resolve = async (_: any, args: { [argName: string]: any }) => {
		let ns = new V1Namespace();
		var metadata = args.metadata;
		let diag = new ClusterDiagram("mongodb://localhost:27017")

		metadata["annotations"] && (
			metadata["annotations"] = Utils.geFormattedtMap(metadata["annotations"])
		);
		ns.kind = "Namespace";
		ns.metadata = metadata;
		ns.apiVersion = args.apiVersion;
		await diag.add(args.cluster, ns)
		return ns;
	}
}
