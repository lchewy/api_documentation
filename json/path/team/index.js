import IdNameAlias from "../../definitions/IdNameAlias";
import Formations from "../../definitions/Formations";
import Zone from "../../definitions/Zone";

const responseProps = {
    success: { type: "boolean" },
    response: {
      type: "object",
      properties: {
        team: {
          allOf: [IdNameAlias, { properties: { market: { type: "string" } } }]
        },
        conference: IdNameAlias,
        division: IdNameAlias,
        venue: {
          type: "object",
          properties: {
            id: { type: "string" },
            name: { type: "string" },
            city: { type: "string" },
            state: { type: "string" },
            country: { type: "string" },
            zip: { type: "string" },
            address: { type: "string" },
            capacity: { type: "integer" },
            surface: { type: "string" },
            roof_type: { type: "string" }
          }
        },
        statistics: {
          type: "object",
          properties: {
            offense: {
              type: "object",
              properties: {
                formation: {
                  type: "array",
                  items: Formations
                },
                zone: {
                  type: "array",
                  items: Zone
                }
              }
            }
          }
        },
        defense: {
          type: "object",
          properties: {
            formation: {
              type: "array",
              items: Formations
            },
            zone: {
              type: "array",
              items: Zone
            }
          }
        }
      }
    }
  };
  

export default {
  get: {
    tags: ["NFL"],
    summary: "a NFL team single season data",
    description: "statistics for a single NFL team",
    operationId: "getTeamById",
    produces: ["application/json"],
    parameters: [
      {
        name: "teamId",
        in: "path",
        description: "provide team id from SR model",
        type: "string",
        // schema: { $ref: "#/definitions/Team" },
        required: true
      }
    ],
    responses: {
      "200": {
        description: "successful operations",
        schema: {
          type: "object",

          properties: {
            success: { type: "boolean" },
            response: {
              type: "object",
              properties: responseProps
            }
          }
        }
      },
      "400": { description: "Invalid Id supplied" },
      "404": { description: "Team not found" }
    }
  }
};

