import { style } from "@vanilla-extract/css";
import { color, sizes } from "@/styles/foundation";

const head = style({
  color: `${color.main}`,
})

const wrapper = style({
  backgroundColor: `${color.text}`,
  borderRadius: '5px',
  padding: `${sizes.M}`,
  display: 'flex',
  flexDirection: 'column',
  gap: `${sizes.XS}`,
  width: '70vw',
  margin: '0 auto',

  '@media': {
    'screen and (max-width: 768px)': {
      width: '90vw',
    },
  },
});

const inner = style({
  display: 'flex',
  flexDirection: 'column',
  gap: `${sizes.XS}`
})

const workInner = style({
  display: 'flex',
  flexDirection: 'column',
  gap: `${sizes.XXS}`
})

const term = style({
  color: `${color.subText}`
})

const detailArea = style({
  display: 'flex',
  flexDirection: 'column',
  color: `${color.subText}`
})

export const workCardStyle = {
  head,
  wrapper,
  inner,
  workInner,
  term,
  detailArea
} as const
