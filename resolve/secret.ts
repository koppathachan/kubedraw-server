import { ClusterDiagram } from "../db/cluster-diagram";
import { V1Secret } from "@kubernetes/client-node";

export class SecretResolvers {
	public static resolve = async (_: any, args: { [argName: string]: any }) => {
		let secret = new V1Secret();
		var secretdata : { [key:string]:string; } = {};
		var annotations : { [key:string]:string; } = {};
		secret.kind = "secret";
		secret.apiVersion = args.apiVersion
		args.type && ( secret.type = args.type );
		args.immutable && ( secret.immutable = args.immutable )
		for ( let dataset of args.data ) {
			secretdata[dataset["key"]] = dataset["value"];
		}
		for ( let annotation of args.metadata["annotations"] ) {
			annotations[annotation["key"]] = annotation["value"];
		}
		args.metadata["annotations"] = annotations;
		secret.metadata = args.metadata;
		secret.data = secretdata;
		let diag = new ClusterDiagram("mongodb://localhost:27017")
		await diag.add(args.cluster, secret)
		return secret;
	}
}
