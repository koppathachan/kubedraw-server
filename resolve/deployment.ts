import { ClusterDiagram } from "../db/cluster-diagram";
import { V1Deployment, KubeConfig, AppsV1Api } from "@kubernetes/client-node";

export class DeploymentResolvers {
	public static resolve = async (_: any, args: { [argName: string]: any }) => {
		let deployment = new V1Deployment();
		console.log(args)
		let diag = new ClusterDiagram("mongodb://localhost:27017")

		// metadata["annotations"] && (
		// 	metadata["annotations"] = Utils.geFormattedtMap(metadata["annotations"])
		// );

		// spec["template"]["metadata"]["annotations"] && (
		// 	spec["template"]["metadata"]["annotations"] = Utils.geFormattedtMap(spec["template"]["metadata"]["annotations"])
		// );
		deployment.kind = "Deployment";
		deployment.apiVersion = args.apiVersion;
		deployment.metadata = args.metadata;
		deployment.spec = args.spec
		
		//@ts-ignore
		deployment.spec.template.spec.containers = [{
			"image": args.spec.template.spec.image,
			"name": args.spec.template.spec.name,
			"ports": [
				{
					"containerPort": parseInt(args.spec.template.spec.ports.containerPort)
				}
			],
			"env": args.spec.template.spec.env
		}]
		//@ts-ignore
		deployment.spec.template.metadata.labels = args.metadata.labels
		//@ts-ignore
		delete deployment.spec?.template.spec.image
		//@ts-ignore
		delete deployment.spec?.template.spec.name
		//@ts-ignore
		delete deployment.spec?.template.spec.ports
		try {
			console.log(JSON.stringify(deployment))
			let kc = new KubeConfig()
			kc.loadFromDefault();

			const k8sApi = kc.makeApiClient(AppsV1Api)
			await k8sApi.createNamespacedDeployment(deployment.metadata?.namespace || "default", deployment)
			await diag.add(args.cluster, deployment)

		} catch (ex) {
			console.error(ex)
		}

		return deployment;
	}
}
