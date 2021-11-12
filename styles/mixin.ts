import { css } from 'styled-components'

export const hover = (content: string) => {
  const hoverCss = css`
    &:hover {
      ${content}
    }
  `
  return hoverCss
}
