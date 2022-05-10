import React from 'react';

import H2 from '../../components/H2';
import H3 from '../../components/H3';
import styled from 'styled-components';
import TextStyled from '../../components/TextStyled';
import { screenHeight } from '../../styles/theme';

const OnBoardingGain = ({ onPress }) => {

  return (
    <OnBoarding>
      <Title>
        <TextStyled bold>Sans objectif, pas de gains</TextStyled>
      </Title>
      <SubTitle>
        <TextStyled color={"#3C3C4360"}>En 3 étapes, je peux me fixer un objectif pour réduire ma consommation d'alcool</TextStyled>
      </SubTitle>
      <Continue>
        <ButtonTouchable onPress={onPress}>
          <ContinueText>
            <TextStyled color={"#5856D6"}> Je me fixe un objectif</TextStyled>
          </ContinueText>
        </ButtonTouchable>
      </Continue>
    </OnBoarding>
  )
}

const OnBoarding = styled.View`
  position: absolute;
  background-color: white ;
  margin-top: ${screenHeight * 0.3}px;
  left: 10%;
  width: 80%;
  padding: 24px;
  border-style: solid;
  border-width: 1px;
  border-color: #00000020 ;
`;

const Continue = styled.View`
  alignItems: flex-end;
  margin-top: 30px;
`;
const ButtonTouchable = styled.TouchableOpacity`
`;

const ContinueText = styled.Text`
  text-transform: uppercase;
`;

const Title = styled(H2)`
  margin-bottom: 15px;
`;

const SubTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 15px;
`;

export default OnBoardingGain