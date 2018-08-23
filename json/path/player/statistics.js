import INT32 from "../../definitions/Int32";
import Zone from "../../definitions/Zone"

export default {
  type: "object",
  properties: {
    offense: {
      type: "object",
      properties: {
        player_run: {
          type: "object",
          properties: {
            player_name: { type: "string" },
            left_pct: { type: "number", format: "float" },
            left_yard_per_run: { type: "string" },
            right_pct: { type: "number", format: "float" },
            right_yard_per_run: { type: "string" },
            player_total_runs_across_all_zones: INT32,
            outside_left_pct: INT32,
            outside_left_ypc: {
              type: "number",
              format: "float"
            },
            between_the_tackles_pct: INT32,
            between_the_tackles_ypc: INT32,
            outside_right_pct: INT32,
            outside_right_ypc: {
              type: "number",
              format: "float"
            },
            outside_between_tackles_text_desc: {
              type: "string"
            }
          }
        },
        league_run: {
          type: "object",
          properties: {
            outside_left_pct: INT32,
            outside_left_ypc: {
              type: "number",
              format: "float"
            },
            between_the_tackles_pct: INT32,
            between_the_tackles_ypc: {
              type: "number",
              format: "float"
            },
            outside_right_pct: INT32,
            outside_right_ypc: {
              type: "number",
              format: "float"
            }
          }
        },
        zone: Zone
      }
    },
    most_run_routes: { type: "array" },
    routes: {
      type: "array",
      items: {
        type: "object",
        properties: {
          season: INT32,
          date_string: { type: "string" },
          player_positon: { type: "string" },
          targets: INT32,
          receptions: INT32,
          total_yards: INT32,
          touchdowns: INT32,
          game_ID: {
            type: "array",
            items: INT32
          },
          routes: {
            type: "array",
            items: {
              type: "object",
              properties: {
                pass_caught: { type: "boolean" },
                yardage_gained: INT32,
                play_ID: INT32,
                pass_caught_index: INT32,
                touchdown: { type: "boolean" },
                coords: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      x: { type: "number", format: "float" },
                      y: { type: "number", format: "float" }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
