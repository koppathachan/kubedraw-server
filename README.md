# KubeDraw Server
KubeDraw server is a graphql server for querying and mutating a kubernetes cluster specification.

## Nodemon
For development the service will run using nodemon. Nodemon will restart the server on every saved code change. To start nodemon run:
```sh
npm run nodemon
```

## MongoDb
Mongodb 4.0 should be running on 27017

## Query
copy paste the following on the graphiql ui : 

{
  namespaces{
    metadata{name}
  }
}

## Mutation
copy paste the following on the graphiql to insert data to mongodb : 

mutation {
  createNamespace(metadata:{
    name: "test"
    annotations: "This is an annotation"
  }) {
    metadata {
      name,
      annotations
    }
  }
}

copy paste the following to create a json for kubernetes deployment to mongodb:

mutation {
  createDeployment(metadata: {
    name: "mydeployment",
    labels: {app: "nginx"},
    annotations: "somn",
  }, spec: {replicas: 2, selector: {
    matchLabels:{
      app: "nginx"
    }
  }, template: {
    spec: {
      name: "nginx",
      image: "nginx:1.14.2",
      ports: {containerPort: "80"}
    },
    metadata: {
      annotations:"anything",
      name: "nginx",
      labels:{
        app:""
      }
    }
  }}) {
    kind,
    metadata {
      name
    }
  }
}