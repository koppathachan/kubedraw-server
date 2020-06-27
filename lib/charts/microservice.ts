import { Construct } from "constructs";
import { MicroserviceOptions } from "./microservice-options";

export class Microservice extends Construct {
	constructor(scope: Construct, ns: string, options: MicroserviceOptions) {
		super(scope, ns)
		
	}
}