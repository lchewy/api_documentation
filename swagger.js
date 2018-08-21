window.spec = {
  swagger: "2.0",
  info: {
    description: "NFL data",
    version: "1.0.0",
    title: "NFL Data",
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
  schemes: ["http", "https"],

  paths: {
    "/en_US/NFL/player/{playerId}": {
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
            schema: { $ref: "#/definitions/Player" }
          }
        ],
        responses: {
          "200": {
            description: "successful operations",
            schema: { $ref: "#/definitions/Player" }
          },
          "400": {
            description: "Invalid ID supplied"
          },
          "404": {
            description: "Player not found"
          }
        }
      }
    },

    "/en_US/NFL/team/{teamId}": {
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
            schema: { $ref: "#/definitions/Team" }
          }
        ],
        responses: {
          "200": {
            description: "successful operations",
            schema: { $ref: "#/definitions/Team" }
          },
          "400": {
            description: "Invalid Id supplied"
          },
          "404": {
            description: "Team not found"
          }
        }
      }
    }
  },

  definitions: {
    Player: {
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
            $ref: "#/definitions/PlayerTeam",
            draft: {
              type: "object",
              properties: {
                year: { type: "integer", format: "int32" },
                round: { type: "integer", format: "int32" },
                number: { type: "integer", format: "int32" },
                $ref: "#/definitions/PlayerTeam"
              }
            },
            statistics: {
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
                        player_total_runs_across_all_zones: {
                          type: "integer",
                          format: "int32"
                        },
                        outside_left_pct: { type: "integer", format: "int32" },
                        outside_left_ypc: { type: "number", format: "float" },
                        between_the_tackles_pct: {
                          type: "integer",
                          format: "int32"
                        },
                        between_the_tackles_ypc: {
                          type: "integer",
                          format: "int32"
                        },
                        outside_right_pct: { type: "integer", format: "int32" },
                        outside_right_ypc: { type: "number", format: "float" },
                        outside_between_tackles_text_desc: { type: "string" }
                      }
                    },

                    league_run: {
                      type: "object",
                      properties: {
                        outside_left_pct: { type: "integer", format: "int32" },
                        outside_left_ypc: { type: "number", format: "float" },
                        between_the_tackles_pct: {
                          type: "integer",
                          format: "int32"
                        },
                        between_the_tackles_ypc: {
                          type: "number",
                          format: "float"
                        },
                        outside_right_pct: { type: "integer", format: "int32" },
                        outside_right_ypc: { type: "number", format: "float" }
                      }
                    },

                    zone: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          types: { type: "string" },
                          reception_dec: { type: "string" },
                          reception_img: { type: "string" },
                          reception: {
                            type: "array",
                            items: { type: "integer", format: "int32" }
                          },
                          target_desc: { type: "string" },
                          target_img: { type: "string" },
                          reception_rate: {
                            type: "array",
                            items: { type: "integers", format: "int32" }
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
      }
    },

    Team: {
      success: { type: "boolean" },
      response: {
        type: "object",
        properties: {
          team: {
            type: "object",
            properties: {
              id: { type: "string" },
              name: { type: "string" },
              market: { type: "string" },
              alias: { type: "string" }
            }
          },
          conference: {
            type: "object",
            properties: {
              id: { type: "string" },
              name: { type: "string" },
              alias: { type: "string" }
            }
          },
          division: {
            type: "object",
            properties: {
              id: { type: "string" },
              name: { type: "string" },
              alias: { type: "string" }
            }
          },
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
                  $ref: "#/definitions/Formations",
                  zone: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        type: { type: "string" },
                        reception_desc: { type: "string" },
                        reception_img: { type: "string" },
                        reception: {
                          type: "array",
                          items: { type: "integers", format: "int32" }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          defense: {
            type: "object",
            properties: {
              $ref: "#/definitions/Formations"
            }
          }
        }
      }
    },

    Formations: {
      type: "array",
      items: {
        type: "object",
        properties: {
          type: { type: "string" },
          num_plays_lined_up: {
            type: "integer",
            format: "int32"
          },
          num_plays_lined_up_pct: {
            type: "number",
            format: "float"
          },
          num_plays_lined_up_rnk: {
            type: "integer",
            format: "int32"
          },
          yards_play: { type: "number", format: "float" },
          tds: { type: "integer", format: "int32" },
          tds_rnk: { type: "integer", format: "int32" },
          tds_rnk_desc: { type: "string" },
          tds_rnk_img: { type: "string" }
        }
      }
    },

    PlayerTeam: {
      type: "object",
      properties: {
        id: { type: "string" },
        name: { type: "string" },
        market: { type: "string" },
        alias: { type: "string" }
      }
    }
  },

  externalDocs: {
    description: "Find out more about Swagger",
    url: "http://swagger.io"
  }
};
