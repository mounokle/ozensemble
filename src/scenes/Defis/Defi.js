import React from 'react';
import { View } from 'react-native';
import styled, { css } from 'styled-components';
import ButtonPrimary from '../../components/ButtonPrimary';
import H1 from '../../components/H1';
import TextStyled from '../../components/TextStyled';
import TopTimeline from './TopTimeline';
import Timeline from './Timeline';
import DayModule from './DayModule';
import NPS from '../NPS/NPS';
import ArrowRight from '../../components/ArrowRight';

const Defi = ({ navigation, data, title, validatedDays, updateValidatedDays, ActiveDayIndex, hackAndUnlockDay }) => {
  const [NPSvisible, setNPSvisible] = React.useState(false);
  const onPressContribute = () => setNPSvisible(true);
  const closeNPS = () => setNPSvisible(false);

  const nbdays = data.length;
  const activeDay = Math.min(data.length - 1, ActiveDayIndex);
  const activeDayIsDone = activeDay <= validatedDays - 1;

  const getTitleColor = (dayIndex) => {
    if (activeDay < dayIndex) return '#c4c4c4';
    if (validatedDays > dayIndex) return '#4030a5';
    if (activeDay === dayIndex) return '#de285e';
  };
  const getSubtitleColor = (dayIndex) => {
    if (activeDay < dayIndex) return '#c4c4c4';
    if (validatedDays > dayIndex) return '#191919';
    if (activeDay === dayIndex) return '#191919';
  };
  return (
    <ScreenBgStyled>
      <NPS forceView={NPSvisible} close={closeNPS} />
      <TopContainer>
        <Title>
          <TextStyled color="#4030a5">{title}</TextStyled>
        </Title>
      </TopContainer>
      <TopTimeline
        nbdays={nbdays}
        validatedDays={validatedDays}
        activeDay={activeDay}
        hackAndUnlockDay={hackAndUnlockDay}
      />
      <FeedCTAContainer zIndex={10}>
        {!activeDayIsDone && !!data[activeDay]?.screenCTA ? (
          <FeedCTAButton
            content={data[activeDay]?.textCTA}
            color="#4030a5"
            onPress={() => {
              navigation.push(data[activeDay]?.screenCTA);
            }}
          />
        ) : (
          <FeedCTAButton
            content="Ajouter une consommation"
            onPress={() => {
              if (!activeDayIsDone) updateValidatedDays(activeDay + 1);
              navigation.push('ADD_DRINK', { timestamp: Date.now() });
            }}
          />
        )}
      </FeedCTAContainer>
      <FeedContainer>
        <DayModule dayData={data[activeDay]} activeDayIsDone={activeDayIsDone} />
        <Separator />
        {data.map((dayData, dayIndex) => {
          return (
            <FeedDay key={dayIndex}>
              <Timeline
                first={dayIndex === 0}
                last={dayIndex === data.length - 1}
                done={validatedDays > dayIndex}
                locked={activeDay < dayIndex}
                active={activeDay === dayIndex}
              />
              <FeedDayContent
                activeOpacity={0.47}
                disabled={activeDay < dayIndex || !dayData?.screenCTA}
                onPress={() => {
                  navigation.push(dayData?.screenCTA, { inDefi7Days: validatedDays <= dayIndex });
                }}>
                <View style={{ flex: 1 }}>
                  <TitleDay color={getTitleColor(dayIndex)}>{dayData?.title}</TitleDay>
                  <SubtitleDay color={getSubtitleColor(dayIndex)}>{dayData?.tagLine}</SubtitleDay>
                </View>
                {!(activeDay < dayIndex || !dayData?.screenCTA) ? (
                  <ArrowRight size={10} color="#4030a5" style={{ marginTop: 0 }} />
                ) : null}
              </FeedDayContent>
            </FeedDay>
          );
        })}
        <ButtonContainer>
          <ButtonPrimary
            small
            content="Contribuer à Oz Ensemble"
            shadowColor="#201569"
            color="#4030A5"
            onPress={onPressContribute}
          />
        </ButtonContainer>
      </FeedContainer>
    </ScreenBgStyled>
  );
};

const TitleDay = styled(TextStyled)`
  font-size: 12px;
  font-weight: bold;
  color: ${({ color }) => color || '#c4c4c4'};
`;
const SubtitleDay = styled(TextStyled)`
  color: ${({ color }) => color || '#c4c4c4'};
`;
const Separator = styled.View`
  background-color: #c4c4c4;
  height: 1px;
  margin: 15px;
  align-self: center;
  width: 30%;
`;

const FeedContainer = styled.View`
  background-color: #efefef;
  padding: 20px;
  padding-bottom: 100px;
  padding-top: 30px;
`;

const commonCss = css`
  width: 85%;
  flex-shrink: 0;
`;

/*
  Top part
*/

const ScreenBgStyled = styled.ScrollView`
  background-color: #f9f9f9;
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: 100%;
`;

const TopContainer = styled.View`
  padding: 20px;
`;

const Title = styled(H1)`
  ${commonCss}
  margin-top: 10px;
`;

const FeedDay = styled.View`
  flex-direction: row;
  flex-shrink: 1;
  flex-grow: 0;
`;

const FeedDayContent = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  flex-grow: 1;
  padding-horizontal: 15px;
  padding-vertical: 10px;
  margin-top: 8px;
  margin-left: 5px;
`;

const FeedCTAContainer = styled.View`
  margin-top: -45px;
  margin-bottom: -20px;
  align-items: center;
`;

const FeedCTAButton = styled(ButtonPrimary)`
  flex-grow: 0;
`;

const ButtonContainer = styled.View`
  margin-top: 28px;
  align-items: center;
  justify-content: center;
`;

export default Defi;
