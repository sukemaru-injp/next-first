import React from 'react'
import styled from 'styled-components'
import { useDateFormat } from '../../utlis/hooks/useDateFormat'
import { mediaQuery } from '../../styles/mixin'

interface Props {
  start: string | null,
  end: string | null
}

const DateRange: React.FC<Props> = ({ start, end }) => {
  const { formatDate } = useDateFormat()

  return (
    <Wrapper>
      <DateText data-area-name="start">{start ? formatDate(start, 'default') : '-'}</DateText>
      <BorderArea data-area-name="border" />
      <DateText data-area-name="end">{end ? formatDate(end, 'default') : '現在'}</DateText>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template:
    "start    " 20px
    "border   " 1fr
    "end      " 20px;

  & > [data-area-name = "start"] {
    grid-area: start;
  }

  & > [data-area-name = "border"] {
    grid-area: border;
  }

  & > [data-area-name = "end"] {
    grid-area: end;
  }

  ${mediaQuery('mobile', `
    grid-template:
      "start    " 1fr
      "border   " 1fr
      "end      " 1fr;
  `)}
`

const DateText = styled.span`
  color: ${({ theme }) => theme.color.subText};
  text-align: center;
`

const BorderArea = styled.span`
  position: relative;

  &::before {
    position: absolute;
    top: 0;
    left: 50%;
    content: '';
    width: 1px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.subText};
    height: 100%;
  }
`

export default DateRange
