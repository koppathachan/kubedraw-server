export interface MicroserviceOptions {
	/**
	 * The Docker image to use for this service.
	 */
	readonly image: string;

	/**
	 * Number of replicas.
	 *
	 * @default 1
	 */
	readonly replicas?: number;

	/**
	 * External port.
	 *
	 * @default 80
	 */
	readonly port?: number;

	/**
	 * Internal port.
	 *
	 * @default 8080
	 */
	readonly containerPort?: number;
}