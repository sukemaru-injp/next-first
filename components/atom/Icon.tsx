import { FC, ReactNode } from 'react'
import { IconContext } from 'react-icons'

interface Props {
  children: ReactNode
  size?: string
  color?: string
}
const Icon: FC<Props> = (props) => {
  return (
    <>
      <IconContext.Provider
        value={{ color: `${props?.color || '#808080'}`, size: `${props?.size || '20px'}` }}
      >
        {props.children}
      </IconContext.Provider>
    </>
  )
}

export default Icon
