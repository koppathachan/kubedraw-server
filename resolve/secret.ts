import { ClusterDiagram } from "../db/cluster-diagram";
import { V1Secret } from "@kubernetes/client-node";
import Utils from "../lib/utils/utils"

export class SecretResolvers {
	public static resolve = async (_: any, args: { [argName: string]: any }) => {
		let secret = new V1Secret();
		args.metadata["annotations"] && (
			args.metadata["annotations"] = Utils.geFormattedtMap(args.metadata["annotations"])
		);
		secret.kind = "secret";
		secret.apiVersion = args.apiVersion
		args.type && ( secret.type = args.type );
		args.immutable && ( secret.immutable = args.immutable )
		secret.metadata = args.metadata;
		secret.data = Utils.geFormattedtMap(args.data);
		let diag = new ClusterDiagram("mongodb://localhost:27017")
		await diag.add(args.cluster, secret)
		return secret;
	}
}
