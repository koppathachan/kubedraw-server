import { V1ConfigMap, CoreV1Api, KubeConfig } from "@kubernetes/client-node";

export class DeployConfigmap {
	public static deployconfigmap (namespace: string, configmap: V1ConfigMap) {
		const kc = new KubeConfig();
		kc.loadFromDefault();
		const k8sApi = kc.makeApiClient(CoreV1Api);
		k8sApi.createNamespacedConfigMap(namespace, configmap).then(
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