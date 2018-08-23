import INT32 from "../../definitions/Int32";
import team from "../../definitions/PlayerTeam";


export default {
  type: "object",
  properties: {
    year: INT32,
    round: INT32,
    number: INT32,
    team: team
  }
};
