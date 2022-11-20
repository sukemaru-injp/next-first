import { FC, ReactNode, forwardRef, Ref } from 'react'
import { IconContext } from 'react-icons'

interface Props {
  children: ReactNode
  size?: string
  color?: string
}
const Icon: FC<Props> = forwardRef((props, ref: Ref<HTMLSpanElement>) => {
  return (
    <>
      <IconContext.Provider
        value={{ color: `${props?.color || '#808080'}`, size: `${props?.size || '20px'}` }}
      >
        <span ref={ref}>{props.children}</span>
      </IconContext.Provider>
    </>
  )
})
Icon.displayName = 'Icon'
export default Icon
