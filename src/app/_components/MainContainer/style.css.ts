import { style } from "@vanilla-extract/css";
import { sizes } from "@/styles/foundation";

const wrapper = style({
  padding: `${sizes.M}`,
  display: 'flex',
  flexDirection: 'column',
  gap: `${sizes.S}`,
})

export const mainStyle = {
  wrapper,
} as const