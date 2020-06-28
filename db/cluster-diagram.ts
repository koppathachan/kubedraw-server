import { V1ObjectReference } from "@kubernetes/client-node";
import { MongoClient } from "mongodb";
/**
 * ClusterDiagram represents the collection that stores the designed cluster configuration.
 * 
 */
export class ClusterDiagram {
	client: MongoClient;

	/**
	 * Add a kubernetes object to the database.
	 * @param kobj kubernetes object to insert.
	 */
	async add<T extends V1ObjectReference>(kobj: T) {
		if (!this.client.isConnected()) await this.client.connect()

		if (!kobj.kind) throw new Error("'Kind' not defined for Kubernetes object")

		await this.client.db("default").collection(kobj.kind).insertOne(kobj)
	}

	/**
	 * get method return all kubernetes objects of a kind.
	 * @param kind of the kubernetes object (i.e. "LoadBalancer", "Namespace", "Service")
	 */
	async get<T extends V1ObjectReference>(kind: string): Promise<T[]> {
		if (!this.client.isConnected()) await this.client.connect()

		let res = this.client.db("default").collection(kind).find()
		return res.toArray()
	}

	constructor(url: string) {
		this.client = new MongoClient(url, {useUnifiedTopology: true})
	}
}