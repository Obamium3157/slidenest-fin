import { makeColor } from "../../color/test/data.ts";
import type { Font } from "../Font.ts";

export function makeFont(text = "s"): Font {
  return {
    type: "font",
    fontString: text,
    fontFamily: "Arial",
    fontSize: "14px",
    fontWeight: "normal",
    fontStyle: new Set(["bold", "italic"]),
    letterSpacing: "0px",
    wordSpacing: "0px",
    color: makeColor("#000000"),
    textDecoration: new Set(),
    textTransform: "none",
  };
}
