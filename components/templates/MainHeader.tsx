import Buttons from '../parts/Buttons'
import Header from '../atoms/header'
import { FC } from 'react'
import { buttonUi } from '../../src/ui'

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
