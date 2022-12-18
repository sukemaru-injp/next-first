import Image from 'next/image'
import styled from 'styled-components'

export const OriginalImage = styled(Image)`
  border-radius: 10px;
  object-fit: cover;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #000;
    opacity: 0.2;
    z-index: 10;
  }
`
