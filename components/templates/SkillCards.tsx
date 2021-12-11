import styled from 'styled-components'
import CardWithTitle from '../parts/CardWithTitle'
import { map } from 'lodash'

interface Skill {
  title: string,
  sentence: string[]
}
const InnerWrapper = styled.div`
padding: 20px;
`
const Content = styled.p`
line-height: 1.2rem;
font-size: 1.1rem;
padding: 5px 10px;
`

const skillInner = [
  {
    title: 'CSS',
    sentence: ['コンポーネント志向なCSS設計を意識しています。', 'SCSSやCSSinJSでの記述に精通。']
  },
  {
    title: 'HTML',
    sentence: ['アクセシビリティを考慮したマークアップ']
  }
]

const SkillCards = () => {
  return (
    <>
      {map(skillInner, (v: Skill, idx) => {
        return <InnerWrapper>
          <CardWithTitle
            key={`skill${idx}`}
            title={v.title}>
            {map(v.sentence, (item, idx) => {
              return <Content>
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