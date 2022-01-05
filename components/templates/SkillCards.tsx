import styled from 'styled-components'
import CardWithTitle from '../parts/CardWithTitle'
import { map } from 'lodash'
import { skillInner } from '../../src/ui'
import { mediaQuery, hover } from '../../styles/mixin'

export interface Skill {
  title: string,
  sentence: string[]
}
const InnerWrapper = styled.div`
padding: 20px;
transition: all 0.2s;
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

const SkillCards = () => {
  return (
    <>
      {map(skillInner, (v: Skill, idx) => {
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