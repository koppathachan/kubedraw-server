import { V1Secret, CoreV1Api, KubeConfig } from "@kubernetes/client-node";

export class DeploySecret {
	public static deploySecret (namespace: string, secret: V1Secret) {
		const kc = new KubeConfig();
		kc.loadFromDefault();
		const k8sApi = kc.makeApiClient(CoreV1Api);
		k8sApi.createNamespacedSecret(namespace, secret).then(
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