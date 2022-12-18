import React from 'react'
import styled from 'styled-components'
import Heading from '../atom/Heading'
import Card from '../atom/Cardv2'
import Space from '../atom/Space'
import { OriginalImage } from '../atom/OriginalImage'
import { mediaQuery } from '../../styles/mixin'

interface Props {
  name: string;
  description: string[];
  imagePath: string;
}

const WorkCard: React.FC<Props> = ({ name, description, imagePath }) => {
  return (
    <Card>
      <Wrapper>
        <Heading size='small' color="sub">
          {name}
        </Heading>

        <MainWrapper>
          <Description>
            {description.map((t, i) => {
              return (
                <Text key={`d-${i}`}>
                  {t}
                </Text>
              )
            })}
          </Description>

          {imagePath && (
            <>
              <Space size={['none', 'small']}>
                <OriginalImage
                  src={imagePath}
                  alt="work"
                  width={250}
                  height={200} />
              </Space>
            </>
          )}
        </MainWrapper>
      </Wrapper>
    </Card>
  )
}

const Wrapper = styled.div``

const MainWrapper =styled.div`
display: flex;

${mediaQuery('mobile', `
  flex-direction: column;
`)}
`

const Description = styled.div`
  padding: 20px 0;
  color: ${({ theme }) => theme.color.subText};
`

const Text = styled.p`
  line-height: 1.4rem;
  padding: 4px 0;
`

export default WorkCard
