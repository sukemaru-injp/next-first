import styled, { keyframes } from 'styled-components'
import CardWithTitle from '../parts/CardWithTitle'
import { map } from 'lodash'
import { mediaQuery, hover, fadeIn } from '../../styles/mixin'
import { VFC } from 'react'

export interface Skill {
  title: string,
  sentence: string[]
}

interface Props {
  uiData: Skill[]
}

const InnerWrapper = styled.div`
padding: 20px;
transition: all 0.2s;
animation-name: ${fadeIn};
animation-duration: 1s;
${mediaQuery('mobile', `
padding: 30px 20px;
`)}
${hover(`
transform: scale(1.02);
`)}
`
const Content = styled.p`
line-height: 1.1rem;
font-size: 1.1rem;
padding: 5px 10px;
`

const SkillCards: VFC<Props> = (props: Props) => {
  return (
    <>
      {map(props.uiData, (v: Skill, idx) => {
        return <InnerWrapper key={`skill${idx}`}>
          <CardWithTitle
            title={v.title}>
            {map(v.sentence, (item, idx) => {
              return <Content key={`sentence${idx}`}>
                { item } 
              </Content>
            })
            }
          </CardWithTitle>
        </InnerWrapper>
      })}
    </>
  )
}

export default SkillCards
