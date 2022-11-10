import { forwardRef, Ref, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { MarginProps, SizeType, makeMarginProps } from './Space'

interface CardProps {
  header?: ReactNode; 
  children: ReactNode;
  marginSize?: SizeType | SizeType[]
}

const Card = forwardRef((props: CardProps, ref: Ref<HTMLDivElement>) => {
  const marginProp = makeMarginProps(props?.marginSize || 'none')
  return (
    <>
      <CardStyle
        ref={ref}
        {...marginProp}>
        {props.header && (
          <>
            {props.header}
            <Hr />
          </>
        )}
        {props.children}
      </CardStyle>
    </>
  )
})

Card.displayName = 'Card'
export default Card

const Hr = styled.hr`
color: #ddd;
`

const CardStyle = styled.div<MarginProps>`
  ${({ top, right, bottom, left }) => {
    return css`
      background-color: #fff;
      box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.4);
      padding: 20px;
      margin-top: ${top}px;
      margin-left: ${right}px;
      margin-bottom: ${bottom}px;
      margin-left: ${left}px;
    `
  }}
`
