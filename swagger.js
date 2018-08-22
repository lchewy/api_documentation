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
            // schema: { $ref: "#/definitions/Player" },
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
                  properties: {
                    response: {
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
                        team: { $ref: "#/definitions/PlayerTeam" },
                        draft: {
                          type: "object",
                          required: ["#/definitions/PlayerTeam"],
                          properties: {
                            year: { $ref: "#/definitions/INT32" },
                            round: { $ref: "#/definitions/INT32" },
                            number: { $ref: "#/definitions/INT32" },
                            team: { $ref: "#/definitions/PlayerTeam" }
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
                                    left_pct: {
                                      type: "number",
                                      format: "float"
                                    },
                                    left_yard_per_run: { type: "string" },
                                    right_pct: {
                                      type: "number",
                                      format: "float"
                                    },
                                    right_yard_per_run: { type: "string" },
                                    player_total_runs_across_all_zones: {
                                      $ref: "#/definitions/INT32"
                                    },
                                    outside_left_pct: {
                                      $ref: "#/definitions/INT32"
                                    },
                                    outside_left_ypc: {
                                      type: "number",
                                      format: "float"
                                    },
                                    between_the_tackles_pct: {
                                      $ref: "#/definitions/INT32"
                                    },
                                    between_the_tackles_ypc: {
                                      $ref: "#/definitions/INT32"
                                    },
                                    outside_right_pct: {
                                      $ref: "#/definitions/INT32"
                                    },
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
                                    outside_left_pct: {
                                      $ref: "#/definitions/INT32"
                                    },
                                    outside_left_ypc: {
                                      type: "number",
                                      format: "float"
                                    },
                                    between_the_tackles_pct: {
                                      $ref: "#/definitions/INT32"
                                    },
                                    between_the_tackles_ypc: {
                                      type: "number",
                                      format: "float"
                                    },
                                    outside_right_pct: {
                                      $ref: "#/definitions/INT32"
                                    },
                                    outside_right_ypc: {
                                      type: "number",
                                      format: "float"
                                    }
                                  }
                                },

                                zone: { $ref: "#/definitions/Zone" }
                              }
                            },
                            most_run_routes: { type: "array" }, // EMPTY ARRAY ON ENDPOINT, NEED TO TEST ANOTHER PLAYER
                            routes: {
                              type: "array",
                              items: {
                                $ref: "#/definitions/PlayerRoutes"
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
            schema: { $ref: "#/definitions/Team" },
            required: true
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
    // Player: {
    //   type: "object",
    //   properties: {
    //     id: { type: "string" },
    //     last_name: { type: "string" },
    //     first_name: { type: "string" },
    //     birth_date: { type: "string" },
    //     weight: { type: "integer" },
    //     height: { type: "integer" },
    //     position: { type: "string" },
    //     birth_place: { type: "string" },
    //     high_school: { type: "string" },
    //     college: { type: "string" },
    //     college_conf: { type: "string" },
    //     rookie_year: { type: "string" },
    //     team: { $ref: "#/definitions/PlayerTeam" },
    //     draft: {
    //       type: "object",
    //       required: ["#/definitions/PlayerTeam"],
    //       properties: {
    //         year: { $ref: "#/definitions/INT32" },
    //         round: { $ref: "#/definitions/INT32" },
    //         number: { $ref: "#/definitions/INT32" },
    //         team: { $ref: "#/definitions/PlayerTeam" }
    //       }
    //     },
    //     statistics: {
    //       type: "object",
    //       properties: {
    //         offense: {
    //           type: "object",
    //           properties: {
    //             player_run: {
    //               type: "object",
    //               properties: {
    //                 player_name: { type: "string" },
    //                 left_pct: { type: "number", format: "float" },
    //                 left_yard_per_run: { type: "string" },
    //                 right_pct: { type: "number", format: "float" },
    //                 right_yard_per_run: { type: "string" },
    //                 player_total_runs_across_all_zones: {
    //                   $ref: "#/definitions/INT32"
    //                 },
    //                 outside_left_pct: { $ref: "#/definitions/INT32" },
    //                 outside_left_ypc: { type: "number", format: "float" },
    //                 between_the_tackles_pct: {
    //                   $ref: "#/definitions/INT32"
    //                 },
    //                 between_the_tackles_ypc: {
    //                   $ref: "#/definitions/INT32"
    //                 },
    //                 outside_right_pct: { $ref: "#/definitions/INT32" },
    //                 outside_right_ypc: { type: "number", format: "float" },
    //                 outside_between_tackles_text_desc: { type: "string" }
    //               }
    //             },

    //             league_run: {
    //               type: "object",
    //               properties: {
    //                 outside_left_pct: { $ref: "#/definitions/INT32" },
    //                 outside_left_ypc: { type: "number", format: "float" },
    //                 between_the_tackles_pct: {
    //                   $ref: "#/definitions/INT32"
    //                 },
    //                 between_the_tackles_ypc: {
    //                   type: "number",
    //                   format: "float"
    //                 },
    //                 outside_right_pct: { $ref: "#/definitions/INT32" },
    //                 outside_right_ypc: { type: "number", format: "float" }
    //               }
    //             },

    //             zone: { $ref: "#/definitions/Zone" }
    //           }
    //         },
    //         most_run_routes: { type: "array" }, // EMPTY ARRAY ON ENDPOINT, NEED TO TEST ANOTHER PLAYER
    //         routes: {
    //           type: "array",
    //           items: {
    //             type: "object",
    //             properties: {
    //               season: { $ref: "#/definitions/INT32" },
    //               date_string: { type: "string" },
    //               player_positon: { type: "string" },
    //               targets: { $ref: "#/definitions/INT32" },
    //               receptions: { $ref: "#/definitions/INT32" },
    //               total_yards: { $ref: "#/definitions/INT32" },
    //               touchdowns: { $ref: "#/definitions/INT32" },
    //               game_ID: {
    //                 type: "array",
    //                 items: { $ref: "#/definitions/INT32" }
    //               },
    //               routes: {
    //                 type: "array",
    //                 items: {
    //                   type: "object",
    //                   properties: {
    //                     pass_caught: { type: "boolean" },
    //                     yardage_gained: { $ref: "#/definitions/INT32" },
    //                     play_ID: { $ref: "#/definitions/INT32" },
    //                     pass_caught_index: { $ref: "#/definitions/INT32" },
    //                     touchdown: { type: "boolean" },
    //                     coords: {
    //                       type: "array",
    //                       items: {
    //                         type: "object",
    //                         properties: {
    //                           x: { type: "number", format: "float" },
    //                           y: { type: "number", format: "float" }
    //                         }
    //                       }
    //                     }
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // },
    PlayerRoutes: {
      type: "object",
      properties: {
        season: { $ref: "#/definitions/INT32" },
        date_string: { type: "string" },
        player_positon: { type: "string" },
        targets: { $ref: "#/definitions/INT32" },
        receptions: { $ref: "#/definitions/INT32" },
        total_yards: { $ref: "#/definitions/INT32" },
        touchdowns: { $ref: "#/definitions/INT32" },
        game_ID: {
          type: "array",
          items: { $ref: "#/definitions/INT32" }
        },
        routes: {
          type: "array",
          items: {
            $ref: "#/definitions/PlayerSubRoutes"
          }
        }
      }
    },
    PlayerSubRoutes: {
      type: "object",
      properties: {
        pass_caught: { type: "boolean" },
        yardage_gained: {
          $ref: "#/definitions/INT32"
        },
        play_ID: {
          $ref: "#/definitions/INT32"
        },
        pass_caught_index: {
          $ref: "#/definitions/INT32"
        },
        touchdown: { type: "boolean" },
        coords: {
          type: "array",
          items: {
            $ref: "#/definitions/Coords"
          }
        }
      }
    },

    Coords: {
      type: "object",
      properties: {
        x: {
          type: "number",
          format: "float"
        },
        y: {
          type: "number",
          format: "float"
        }
      }
    },

    Team: {
      success: { type: "boolean" },
      response: {
        type: "object",
        properties: {
          team: {
            allOf: [
              { $ref: "#/definitions/INA" },
              {
                properties: {
                  market: { type: "string" }
                }
              }
            ]
          },
          conference: { $ref: "#/definitions/INA" },
          division: { $ref: "#/definitions/INA" },
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
                    items: { $ref: "#/definitions/Formations" }
                  },
                  zone: { type: "array", items: { $ref: "#/definitions/Zone" } }
                }
              }
            }
          },
          defense: {
            type: "object",
            properties: {
              formation: {
                type: "array",
                items: { $ref: "#/definitions/Formations" }
              },
              zone: { type: "array", items: { $ref: "#/definitions/Zone" } }
            }
          }
        }
      }
    },

    Formations: {
      type: "object",
      properties: {
        type: { type: "string" },
        num_plays_lined_up: {
          $ref: "#/definitions/INT32"
        },
        num_plays_lined_up_pct: {
          type: "number",
          format: "float"
        },
        num_plays_lined_up_rnk: {
          $ref: "#/definitions/INT32"
        },
        yards_play: { type: "number", format: "float" },
        tds: { $ref: "#/definitions/INT32" },
        tds_rnk: { $ref: "#/definitions/INT32" },
        tds_rnk_desc: { type: "string" },
        tds_rnk_img: { type: "string" }
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
    },
    // ARRAY OF INTEGERS
    ArrayOfIntegers: {
      type: "array",
      items: {
        $ref: "#/definitions/INT32"
      }
    },

    // INT32
    INT32: {
      type: "integer",
      format: "int32"
    },

    // ID & NAME & ALIAS
    INA: {
      type: "object",
      properties: {
        id: { type: "string" },
        name: { type: "string" },
        alias: { type: "string" }
      }
    },

    // ZONE
    Zone: {
      type: "object",
      properties: {
        type: { type: "string", pattern: "" }, //INSERT PATTERN FOR ZONE TYPES
        reception_desc: { type: "string" },
        reception_img: { type: "string" },
        reception_backfield: {
          oneOf: [
            { $ref: "#/definitions/INT32" },
            { $ref: "#/definitions/ArrayOfIntegers" }
          ]
        },
        reception_0_10: {
          oneOf: [
            { $ref: "#/definitions/INT32" },
            { $ref: "#/definitions/ArrayOfIntegers" }
          ]
        },
        reception_10_20: {
          oneOf: [
            { $ref: "#/definitions/INT32" },
            { $ref: "#/definitions/ArrayOfIntegers" }
          ]
        },
        reception_20_plus: {
          oneOf: [
            { $ref: "#/definitions/INT32" },
            { $ref: "#/definitions/ArrayOfIntegers" }
          ]
        },
        reception: { $ref: "#/definitions/ArrayOfIntegers" },
        target_desc: { type: "string" },
        target_img: { type: "string" },
        target_backfield: {
          oneOf: [
            { $ref: "#/definitions/INT32" },
            { $ref: "#/definitions/ArrayOfIntegers" }
          ]
        },
        target_0_10: {
          oneOf: [
            { $ref: "#/definitions/INT32" },
            { $ref: "#/definitions/ArrayOfIntegers" }
          ]
        },
        target_10_20: {
          oneOf: [
            { $ref: "#/definitions/INT32" },
            { $ref: "#/definitions/ArrayOfIntegers" }
          ]
        },
        target_20_plus: {
          oneOf: [
            { $ref: "#/definitions/INT32" },
            { $ref: "#/definitions/ArrayOfIntegers" }
          ]
        },
        target: { $ref: "#/definitions/ArrayOfIntegers" },
        reception_rate_desc: { type: "string" },
        reception_rate_img: { type: "string" },
        reception_rate_backfield: {
          oneOf: [
            { $ref: "#/definitions/INT32" },
            { $ref: "#/definitions/ArrayOfIntegers" }
          ]
        },
        reception_rate_0_10: {
          oneOf: [
            { $ref: "#/definitions/INT32" },
            { $ref: "#/definitions/ArrayOfIntegers" }
          ]
        },
        reception_rate_10_20: {
          oneOf: [
            { $ref: "#/definitions/INT32" },
            { $ref: "#/definitions/ArrayOfIntegers" }
          ]
        },
        reception_rate_20_plus: {
          oneOf: [
            { $ref: "#/definitions/INT32" },
            { $ref: "#/definitions/ArrayOfIntegers" }
          ]
        },
        yards_per_reception_desc: { type: "string" },
        yards_per_reception_img: { type: "string" },
        yards_per_reception_backfield: {
          oneOf: [
            { $ref: "#/definitions/INT32" },
            { $ref: "#/definitions/ArrayOfIntegers" }
          ]
        },
        yards_per_reception_0_10: {
          oneOf: [
            { $ref: "#/definitions/INT32" },
            { $ref: "#/definitions/ArrayOfIntegers" }
          ]
        },
        yards_per_reception_10_20: {
          oneOf: [
            { $ref: "#/definitions/INT32" },
            { $ref: "#/definitions/ArrayOfIntegers" }
          ]
        },
        yards_per_reception_20_plus: {
          oneOf: [
            { $ref: "#/definitions/INT32" },
            { $ref: "#/definitions/ArrayOfIntegers" }
          ]
        },
        reception_rate: {
          $ref: "#/definitions/ArrayOfIntegers"
        },
        yards_per_target_desc: { type: "string" },
        yards_per_target_img: { type: "string" },
        yards_per_target_backfield: {
          oneOf: [
            { $ref: "#/definitions/INT32" },
            { $ref: "#/definitions/ArrayOfIntegers" }
          ]
        },
        yards_per_target_0_10: {
          oneOf: [
            { $ref: "#/definitions/INT32" },
            { $ref: "#/definitions/ArrayOfIntegers" }
          ]
        },
        yards_per_target_10_20: {
          oneOf: [
            { $ref: "#/definitions/INT32" },
            { $ref: "#/definitions/ArrayOfIntegers" }
          ]
        },
        yards_per_target_20_plus: {
          oneOf: [
            { $ref: "#/definitions/INT32" },
            { $ref: "#/definitions/ArrayOfIntegers" }
          ]
        },
        yards_per_target: {
          $ref: "#/definitions/ArrayOfIntegers"
        }
      }
    }
  },

  externalDocs: {
    description: "Find out more about Swagger",
    url: "http://swagger.io"
  }
};
