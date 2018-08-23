import playerTeam from "../../definitions/PlayerTeam";
import draft from "./draft";
import statistics from "./statistics";
import INT32 from "../../definitions/Int32"
const responseProps = {
  // success: { type: "boolean" },
  // response: {
  //   type: "object",
  //   properties: {
  //     player: {
  //       type: "object",
  //       properties: {
 player:{ id: { type: "string" },
  last_name: { type: "string" },
  first_name: { type: "string" },
  birth_date: { type: "string" },
  weight: INT32,
  height: INT32,
  position: { type: "string" },
  birth_place: { type: "string" },
  high_school: { type: "string" },
  college: { type: "string" },
  college_conf: { type: "string" },
  rookie_year: INT32,
  team: playerTeam,
  draft: draft,
  statistics: statistics}
};
//     }
//   }
// }
// };

export default {
  get: {
    tags: ["NFL"],
    summary: "a player's season data",
    description: "return an individual player's stat in NFL",
    operationId: "getPlayerById",
    produces: ["application/json"],
    parameters: [
      {
        name: "playerId",
        in: "path",
        description: "a player's id from SR model",
        type: "string",
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
              properties:  responseProps

            }
          }
        }
      },
      "400": { description: "Invalid ID supplied" },
      "404": { description: "Player not found" }
    }
  }
};
