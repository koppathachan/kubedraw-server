import { ClusterDiagram } from "../db/cluster-diagram";
import { V1Service, KubeConfig, CoreV1Api } from "@kubernetes/client-node";
import Utils from "../lib/utils/utils"

export class ServiceResolvers {
	public static resolve = async (_: any, args: { [argName: string]: any }) => {
		let service = new V1Service();
		var metadata = args.metadata;
		let diag = new ClusterDiagram("mongodb://localhost:27017")

		metadata["annotations"] && (
			metadata["annotations"] = Utils.geFormattedtMap(metadata["annotations"])
		);
		service.kind = "Service";
		service.apiVersion = args.apiVersion
		service.spec = args.spec;
		service.metadata = metadata;
		try {
			console.log(JSON.stringify(service))
			let kc = new KubeConfig()
			kc.loadFromDefault();

			const k8sApi = kc.makeApiClient(CoreV1Api)
			await k8sApi.createNamespacedService(service.metadata?.namespace || "default", service)
			await diag.add(args.cluster, service)

		} catch (ex) {
			console.log(ex)
		}
		return service;
	}
}
