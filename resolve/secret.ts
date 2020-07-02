import { ClusterDiagram } from "../db/cluster-diagram";
import { V1Secret } from "@kubernetes/client-node";
import Utils from "../lib/utils/utils"

export class SecretResolvers {
	public static resolve = async (_: any, args: { [argName: string]: any }) => {
		let secret = new V1Secret();
		var metadata = args.metadata;
		let diag = new ClusterDiagram("mongodb://localhost:27017")

		metadata["annotations"] && (
			metadata["annotations"] = Utils.geFormattedtMap(metadata["annotations"])
		);
		secret.kind = "secret";
		secret.apiVersion = args.apiVersion
		args.type && ( secret.type = args.type );
		args.immutable && ( secret.immutable = args.immutable )
		secret.metadata = metadata;
		secret.data = Utils.geFormattedtMap(args.data);
		await diag.add(args.cluster, secret)
		return secret;
	}
}
