import INT32 from "./Int32";

export default  {
  type: "object",
  properties: {
    type: { type: "string" },
    num_plays_lined_up: INT32,
    num_plays_lined_up_pct: { type: "number", format: "float" },
    num_plays_lined_up_rnk: INT32,
    yards_play: { type: "number", format: "float" },
    tds: INT32,
    tds_rnk: INT32,
    tds_rnk_desc: { type: "string" },
    tds_rnk_img: { type: "string" }
  }
};

