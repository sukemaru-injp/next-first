import Buttons from '../parts/Buttons'
import Header from '../atoms/header'
import { FC } from 'react'

const buttonUi = [
  {
    title: 'Profile',
    to: '/profile'
  },
  {
    title: 'Skill',
    to: '/skill'
  },
  {
    title: 'Works',
    to: '/works'
  }
]

const MainHeader = () => {
  return (
    <>
      <Header>
        <Buttons
          ui={buttonUi} />
      </Header>
    </>
  )
}

export default MainHeader
