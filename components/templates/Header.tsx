import { FC } from 'react'
import styled from 'styled-components'
import { ROUTES } from '../../routes'
import Button from '../atom/Button'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface Props {}

const HeaderStyle = styled.header`
position: sticky;
top: 0;
z-index: 30;
opacity: 0.9;
width: 100%;
height: 70px;
background-color: ${({ theme }) => theme.color.main};
`

const ButtonWrapper = styled.div`
display: grid;
grid-template-columns: repeat(3, 120px);
height: 100%;
font-size: 1.2rem;
`

const buttons: ReadonlyArray<{ path: string, label: string }> = [
  { path: ROUTES.TOP, label: 'Profile' },
  { path: ROUTES.SKILL, label: 'Skill' },
  { path: ROUTES.WORKS, label: 'Works' }
]

const Header: FC<Props> = () => {
  const router = useRouter()

  return (
    <HeaderStyle>
      <ButtonWrapper>
        {buttons.map((button, i) => {
          return (
            <Link
              key={`button${i}`}
              href={button.path}>
              <Button
                type='button'
                color={router.pathname.includes(button.path) ? 'sub' : 'main'}>
                {button.label}
              </Button>
            </Link>
          )
        })}
      </ButtonWrapper>
    </HeaderStyle>
  )
}

export default Header
