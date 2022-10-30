import Buttons from '../parts/Buttons'
import Header from '../atoms/header'
import { VFC } from 'react'
import { buttonUi } from '../../utlis/ui'

const MainHeader: VFC = () => {
  return (
    <Header>
      <Buttons
        ui={buttonUi} />
    </Header>
  )
}

export default MainHeader
