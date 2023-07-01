import { style } from "@vanilla-extract/css";
import { sizes } from "@/styles/foundation";

const wrapper = style({
  padding: `${sizes.M}`
})

export const mainStyle = {
  wrapper,
} as const