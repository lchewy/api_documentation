window.spec = {
  swagger: "2.0",
  info: {
    description:
      "This is a sample server Petstore server. You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.",
    version: "1.0.0",
    title: "Swagger Petstore",
    termsOfService: "http://swagger.io/terms/",
    contact: {
      email: "apiteam@swagger.io"
    },
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
  schemes: ["https", "http"],
  paths: {
    "/en_US/NFL/player/7735c02a-ee75-447c-86e6-6c2168500050": {
      get: {
        tags: ["NFL"],
        summary: "players season data",
        description: "returns a player's past season data",
        operationId: "getPetById",
        produces: ["application/json"],
        parameters: [
          {
            success: { type: "boolean" },
            response: {
              type: "object",
              properties: {
                type: "object",
                properties: {
                  id: { type: "string" },
                  last_name: { type: "string" },
                  first_name: { type: "string" },
                  birth_date: { type: "string" },
                  weight: { type: "integer" },
                  height: { type: "integer" },
                  position: { type: "string" },
                  birth_place: { type: "string" },
                  high_school: { type: "string" },
                  college: { type: "string" },
                  college_conf: { type: "string" },
                  rookie_year: { type: "string" },
                  team: {
                    type: "object",
                    properties: {
                      id:{type:"string"},
                      name: {type:"string"},
                      market:{type:"string"},
                      alias:{type:"string"}
                    }
                  }
                }
              }
            }
          }
        ],
        responses: {
          "200": {
            description: "successful operation",
            schema: {
              type: "object",
              properties: {
                type: "object",
                properties: {
                  id: { type: "string" },
                  last_name: { type: "string" },
                  first_name: { type: "string" },
                  birth_date: { type: "string" },
                  weight: { type: "integer" },
                  height: { type: "integer" },
                  position: { type: "string" },
                  birth_place: { type: "string" },
                  high_school: { type: "string" },
                  college: { type: "string" },
                  college_conf: { type: "string" },
                  rookie_year: { type: "string" },
                  team: {
                    type: "object",
                    properties: {
                      id:{type:"string"},
                      name: {type:"string"},
                      market:{type:"string"},
                      alias:{type:"string"}
                    }
                  }
                }
              }
            }
          },
          "400": {
            description: "Invalid ID supplied"
          },
          "404": {
            description: "Pet not found"
          }
        },
        security: [
          {
            api_key: []
          }
        ]
      }
    }
  },

  definitions: {
    Order: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          format: "int64"
        },
        petId: {
          type: "integer",
          format: "int64"
        },
        quantity: {
          type: "integer",
          format: "int32"
        },
        shipDate: {
          type: "string",
          format: "date-time"
        },
        status: {
          type: "string",
          description: "Order Status",
          enum: ["placed", "approved", "delivered"]
        },
        complete: {
          type: "boolean",
          default: false
        }
      },
      xml: {
        name: "Order"
      }
    },
    Category: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          format: "int64"
        },
        name: {
          type: "string"
        }
      },
      xml: {
        name: "Category"
      }
    },
    User: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          format: "int64"
        },
        username: {
          type: "string"
        },
        firstName: {
          type: "string"
        },
        lastName: {
          type: "string"
        },
        email: {
          type: "string"
        },
        password: {
          type: "string"
        },
        phone: {
          type: "string"
        },
        userStatus: {
          type: "integer",
          format: "int32",
          description: "User Status"
        }
      },
      xml: {
        name: "User"
      }
    },
    Tag: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          format: "int64"
        },
        name: {
          type: "string"
        }
      },
      xml: {
        name: "Tag"
      }
    },
    Pet: {
      type: "object",
      required: ["name", "photoUrls"],
      properties: {
        id: {
          type: "integer",
          format: "int64"
        },
        category: {
          $ref: "#/definitions/Category"
        },
        name: {
          type: "string",
          example: "doggie"
        },
        photoUrls: {
          type: "array",
          xml: {
            name: "photoUrl",
            wrapped: true
          },
          items: {
            type: "string"
          }
        },
        tags: {
          type: "array",
          xml: {
            name: "tag",
            wrapped: true
          },
          items: {
            $ref: "#/definitions/Tag"
          }
        },
        status: {
          type: "string",
          description: "pet status in the store",
          enum: ["available", "pending", "sold"]
        }
      },
      xml: {
        name: "Pet"
      }
    },
    ApiResponse: {
      type: "object",
      properties: {
        code: {
          type: "integer",
          format: "int32"
        },
        type: {
          type: "string"
        },
        message: {
          type: "string"
        }
      }
    }
  },
  externalDocs: {
    description: "Find out more about Swagger",
    url: "http://swagger.io"
  }
};
