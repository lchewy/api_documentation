import paths from "./path"
import definitions from "./definitions"

export default {
  swagger: "2.0",
  info: {
    description: "NFL data",
    version: "1.0.0",
    title: "NFL Data",
    termsOfService: "http://swagger.io/terms/",
    contact: { email: "apiteam@swagger.io" },
    license: {
      name: "Apache 2.0",
      url: "http://www.apache.org/licenses/LICENSE-2.0.html"
    }
  },
  host: "localhost:2000/api",
  basePath: "/v1",
  tags: [
    {
      name: "NFL",
      description: "NFL stuff",
      externalDocs: {
        description: "Find out more",
        url: "http://nfl.com"
      }
    }
  ],
  schemes: ["http", "https"],
  paths: paths,
  definitions: definitions,

  externalDocs: {
    description: "Find out more about Swagger",
    url: "http://swagger.io"
  }
};
