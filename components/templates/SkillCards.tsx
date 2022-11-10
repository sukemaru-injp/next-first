import styled from 'styled-components'
import Card from '../atom/Cardv2'
import { mediaQuery,fadeIn } from '../../styles/mixin'
import { VFC, FC } from 'react'

export interface Skill {
  title: string,
  sentence: string[]
}
interface Props {
  uiData: Skill[]
}

interface CardProps {
  title: string,
  sentence: string[]
}

const SkillCard: FC<CardProps> = ({ title, sentence }) => {
  return (
    <Card
      marginSize={['middle', 'none']}
      header={
        <Title>
          {title}
        </Title>
      }>
      <ContentWrapper>
        {sentence.map((item, idx) => {
          return(
            <Content key={`sentence${idx}`}>
              { item } 
            </Content>
          )
        })
        }
      </ContentWrapper>
    </Card>
  )
}

const SkillCards: VFC<Props> = (props: Props) => {
  return (
    <Wrapper>
      {props.uiData.map((v: Skill, idx) => {
        return (
          <SkillCard
            key={`skill${idx}`}
            title={v.title}
            sentence={v.sentence} />
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 80vw;
animation-name: ${fadeIn};
animation-duration: 1s;
${mediaQuery('mobile', `
width: 90vw;
`)}
`

const Title = styled.h2`
font-weight: bold;
font-size: 1.2rem;
padding: 0 0 15px 0;

${({ theme }) => `
  color: ${theme.color.subText};
`}
`

const Content = styled.p`
line-height: 1.5;
font-size: 1.1rem;
`
const ContentWrapper = styled.div`
padding: 20px 10px;
`

export default SkillCards
