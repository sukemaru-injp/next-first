import { style } from '@vanilla-extract/css'
import { color } from '@/styles/foundation'

const wrapper = style({
  backgroundColor: `${color.text}`,
  borderRadius: '5px'
})

export const profileCardStyle = {
  wrapper
} as const
