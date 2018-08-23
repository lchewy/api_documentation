import playerPath from "./player";
import teamPath from "./team"

export default {
  "/en_US/NFL/player/{playerId}": playerPath,
  "/en_US/NFL/team/{teamId}": teamPath
};
