import { builder } from "../builder";

builder.scalarType("BigInt", {
  serialize: (value) => value.toString(),
  parseValue: (value) => {
    if (typeof value !== "string" && typeof value !== "number") throw new Error("Invalid Bigint");
    return BigInt(value);
  },
});
