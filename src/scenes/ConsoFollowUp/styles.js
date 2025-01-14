import styled, { css } from 'styled-components';
import UnderlinedButton from '../../components/UnderlinedButton';
import ButtonPrimary from '../../components/ButtonPrimary';
import H1 from '../../components/H1';
import H2 from '../../components/H2';
import H3 from '../../components/H3';
import { screenHeight } from '../../styles/theme';
import { TouchableOpacity } from 'react-native';

const commonCss = css`
  width: 85%;
  flex-shrink: 0;
`;

/*
  Top part
*/

export const ScreenBgStyled = styled.ScrollView`
  background-color: #f9f9f9;
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: 100%;
`;

export const TopContainer = styled.View`
  padding: 20px 20px 40px;
`;

export const Title = styled(H1)`
  ${commonCss}
  margin-top: 10px;
`;

export const SubTitle = styled(H2)`
  ${commonCss}
  font-weight: 500;
  ${(props) => props.last && 'margin-bottom: 40px;'}
`;

/*
  Feed
*/
export const FeedContainer = styled.View`
  background-color: ${({ hideFeed }) => (hideFeed ? '#f9f9f9' : '#efefef')};
  padding: 20px;
  padding-right: 0px;
  padding-bottom: 100px;
`;

export const FeedDay = styled.View`
  flex-direction: row;
  flex-shrink: 1;
  flex-grow: 0;
`;

export const FeedDayContent = styled.View`
  flex-grow: 1;
  padding-horizontal: 15px;
  padding-vertical: 10px;
`;

export const FeedBottomButton = styled(UnderlinedButton)`
  align-items: center;
  margin-bottom: 15px;
`;

export const FeedAddConsoTodayContainer = styled.View`
  margin-top: -45px;
  margin-bottom: -20px;
  align-items: center;
`;

export const FeedAddConsoTodayButton = styled(ButtonPrimary)`
  flex-grow: 0;
`;

export const FeedNoDrinkTodayTopButton = styled(ButtonPrimary)`
  margin-vertical: 20px;
  flex-grow: 0;
`;

export const FeedButtonStyled = styled.View`
  width: 100%;
  min-height: 50px;
  background-color: ${({ backgroundColor }) => backgroundColor || '#f9f9f9'};
  border-width: 1px;
  border-color: ${({ borderColor }) => borderColor || '#dbdbe9'};
  border-radius: 7px;
  padding-left: 5px;
  justify-content: center;
  ${(props) => props.start && 'justify-content: center;'}
  margin-bottom: 10px;
  opacity: ${({ showAsSelected }) => (showAsSelected ? 1 : 0.3)};
`;

/*
Diagram styles
*/

export const LegendContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
`;

export const Legend = styled.Text`
  color: #de285e;
  margin-top: -35px;
  margin-bottom: 35px;
`;

export const Help = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: 1px solid #39cec0;
  background-color: white;
  margin-left: auto;
  justify-content: center;
  align-items: center;
`;
export const HelpText = styled.Text`
  color: #39cec0;
  font-weight: bold;
  font-size: 20px;
`;

export const CloseHelpContainer = styled.View`
  margin-left: auto;
`;

export const BarsContainer = styled.View`
  max-width: 100%;
  flex-direction: row;
  margin-bottom: 40px;
  height: ${({ height }) => height}px;
  align-items: flex-end;
`;

export const Bar = styled(TouchableOpacity)`
  border-color: #4030a5;
  border-style: ${({ empty }) => (empty ? 'dashed' : 'solid')};
  border-width: ${({ empty }) => (empty ? 1 : 0)}px;
  border-radius: ${screenHeight * 0.005}px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 30px;
  margin-horizontal: 3px;
  overflow: hidden;
  height: ${({ height }) => height}px;
`;

const topRadius = css`
  border-top-left-radius: ${screenHeight * 0.005}px;
  border-top-right-radius: ${screenHeight * 0.005}px;
`;

export const UpperBar = styled.View`
  position: absolute;
  bottom: ${({ bottom }) => bottom}px;
  height: ${({ height }) => height}px;
  width: 100%;
  ${topRadius}
  background: #de285e;
`;

const borderBottomRed = css`
  border-bottom-width: 4px;
  border-bottom-color: #de285e;
`;
export const LowerBar = styled.View`
  position: absolute;
  bottom: 0px;
  height: ${({ height }) => height}px;
  width: 100%;
  background: #4030a5;
  ${({ borderBottom }) => borderBottom && borderBottomRed}
  ${({ withTopRadius }) => withTopRadius && topRadius}
`;

export const doseTextHeight = 25;
export const Dose = styled(H3)`
  height: ${doseTextHeight}px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ overLine }) => (overLine ? '#de285e' : '#4030a5')};
`;

export const Line = styled.View`
  position: absolute;
  bottom: ${({ bottom }) => bottom - 1}px;
  width: 100%;
  height: 0px;
  border-style: dashed;
  border-width: 1px;
  border-radius: 1px;
  border-color: #39cec0;
`;
