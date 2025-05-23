import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Text } from '@pancakeswap/uikit'
import Container from 'components/Layout/Container'
import { useTranslation } from 'contexts/Localization'

const getGradient = () => {
  return 'repeating-linear-gradient(to right, #332453, #332453 40px, #281D44 40px, #281D44 80px)'
}

const StyledHero = styled.div`
  background: ${({ theme }) => getGradient()};
  padding-bottom: 40px;
  padding-top: 40px;
`

const CurtainBottom = styled.div`
  background-image: url('/images/curtain-bottom-${({ theme }) => (theme.isDark ? 'dark' : 'dark')}.png');
  background-repeat: repeat-x;
  background-size: contain;
  height: 20px;
`

const Hero = () => {
  const { t } = useTranslation()

  return (
    <Box mb="32px">
      <StyledHero>
        <Container>
          <Heading as="h1" scale="xl" mb="24px">
            {t('IFO: Initial Farm Offerings')}
          </Heading>
          <Text bold fontSize="20px">
            {t('Buy new tokens with a brand new token sale model.')}
          </Text>
        </Container>
      </StyledHero>
      <CurtainBottom />
    </Box>
  )
}

export default Hero
