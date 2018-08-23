import INT32 from "./Int32";
import ArrayOfIntegers from "./ArrayOfIntegers";

export default {
  type: "object",
  properties: {
    type: { type: "string", pattern: "" },
    reception_desc: { type: "string" },
    reception_img: { type: "string" },
    reception_backfield: {
      oneOf: [INT32, ArrayOfIntegers]
    },
    reception_0_10: {
      oneOf: [INT32, ArrayOfIntegers]
    },
    reception_10_20: {
      oneOf: [INT32, ArrayOfIntegers]
    },
    reception_20_plus: {
      oneOf: [INT32, ArrayOfIntegers]
    },
    reception: ArrayOfIntegers,
    target_desc: { type: "string" },
    target_img: { type: "string" },
    target_backfield: {
      oneOf: [INT32, ArrayOfIntegers]
    },
    target_0_10: {
      oneOf: [INT32, ArrayOfIntegers]
    },
    target_10_20: {
      oneOf: [INT32, ArrayOfIntegers]
    },
    target_20_plus: {
      oneOf: [INT32, ArrayOfIntegers]
    },
    target: ArrayOfIntegers,
    reception_rate_desc: { type: "string" },
    reception_rate_img: { type: "string" },
    reception_rate_backfield: {
      oneOf: [INT32, ArrayOfIntegers]
    },
    reception_rate_0_10: {
      oneOf: [INT32, ArrayOfIntegers]
    },
    reception_rate_10_20: {
      oneOf: [INT32, ArrayOfIntegers]
    },
    reception_rate_20_plus: {
      oneOf: [INT32, ArrayOfIntegers]
    },
    yards_per_reception_desc: { type: "string" },
    yards_per_reception_img: { type: "string" },
    yards_per_reception_backfield: {
      oneOf: [INT32, ArrayOfIntegers]
    },
    yards_per_reception_0_10: {
      oneOf: [INT32, ArrayOfIntegers]
    },
    yards_per_reception_10_20: {
      oneOf: [INT32, ArrayOfIntegers]
    },
    yards_per_reception_20_plus: {
      oneOf: [INT32, ArrayOfIntegers]
    },
    reception_rate: ArrayOfIntegers,
    yards_per_target_desc: { type: "string" },
    yards_per_target_img: { type: "string" },
    yards_per_target_backfield: {
      oneOf: [INT32, ArrayOfIntegers]
    },
    yards_per_target_0_10: {
      oneOf: [INT32, ArrayOfIntegers]
    },
    yards_per_target_10_20: {
      oneOf: [INT32, ArrayOfIntegers]
    },
    yards_per_target_20_plus: {
      oneOf: [INT32, ArrayOfIntegers]
    },
    yards_per_target: ArrayOfIntegers
  }
};
