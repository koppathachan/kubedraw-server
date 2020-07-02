import { ExtensionsV1beta1Ingress, KubeConfig, ExtensionsV1beta1Api } from "@kubernetes/client-node";

export class DeployIngress {
	public static deployIngress (namespace: string, ingress: ExtensionsV1beta1Ingress) {
		const kc = new KubeConfig();
		kc.loadFromDefault();
		const k8sApi = kc.makeApiClient(ExtensionsV1beta1Api);
		k8sApi.createNamespacedIngress(namespace, ingress).then(
			(response) => {
				console.log('Created namespace');
				console.log(response);
			},
			(err) => {
				console.error(err);
			},
		);
	}
}