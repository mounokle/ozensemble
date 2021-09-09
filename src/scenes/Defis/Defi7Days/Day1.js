import React from 'react';
import styled from 'styled-components';
import H1 from '../../../components/H1';
import TextStyled from '../../../components/TextStyled';
import ButtonPrimary from '../../../components/ButtonPrimary';
import Background from '../../../components/Background';
import GoBackButton from '../../../components/GoBackButton';
import Diagram from '../../ConsoFollowUp/Diagram';
import CocktailGlass from '../../../components/Illustrations/CocktailGlass';
import HalfBeer from '../../../components/Illustrations/HalfBeer';
import WineGlass from '../../../components/Illustrations/WineGlass';
import Dose from '../../../components/Illustrations/Dose';
import Stars from '../../../components/Illustrations/Stars';

const doses = [
  { Icon: HalfBeer, name: 'bière', volume: 25, degrees: 5 },
  { Icon: WineGlass, name: 'vin', volume: 10, degrees: 12 },
  { Icon: CocktailGlass, name: 'spiritueux', volume: 3, degrees: 40 },
];

const Elem = ({ content }) => (
  <ElemContainer>
    <Stars color="#4030a5" style={{ marginRight: 10 }} size={20} />
    <TextStyled style={{ flex: 1 }}>{content}</TextStyled>
  </ElemContainer>
);

export default ({ navigation }) => {
  return (
    <Background color="#39cec0" withSwiperContainer>
      {/* <HeaderBackground /> */}
      <ScreenBgStyled>
        <TopContainer>
          <TopTitle>
            <GoBackButton onPress={navigation.goBack} />
            <Spacer />
            <H1 color="#4030a5">Comment compter sa consommation d'alcool ?</H1>
          </TopTitle>
          <Paragraph>
            <Elem
              content="Les consommations que vous saisissez dans le cadre du défi se retrouvent automatiquement dans votre agenda
              de consommation disponible dans l’onglet suivi. l’onglet Suivi. Vous pouvez saisir une consommation depuis
              l’agenda ou en appyant sur le bouton “+”"
            />
          </Paragraph>
          <Paragraph>
            <Elem
              content={
                'Quand vous saisissez une consommation d’alcool, celle-ci est automatiquement comptabilisée en unité d’alcool.\n\nA titre indicatif chaque consommation ci-dessous compte pour une unité d’alcool.'
              }
            />
          </Paragraph>
          <IconsContainer>
            {doses.map(({ Icon, volume, name, degrees }, i) => (
              <React.Fragment key={i}>
                <IconWrapper>
                  <Icon size={50} style={{ borderWidth: 0 }} />
                  <Volume color="#4030a5">{name}</Volume>
                  <Volume color="#4030a5">{volume}cl</Volume>
                  <Volume color="#4030a5">{degrees}%</Volume>
                </IconWrapper>
                {i < doses.length - 1 && (
                  <EqualWrapper>
                    <TextStyled color="#191919">=</TextStyled>
                  </EqualWrapper>
                )}
              </React.Fragment>
            ))}
            <EqualWrapper>
              <TextStyled color="#191919">≈</TextStyled>
            </EqualWrapper>
            <IconWrapper>
              <Dose size={25} style={{ borderWidth: 0 }} />
              <Volume color="#4030a5">1 dose</Volume>
              <Volume color="#4030a5">10g d'alcool</Volume>
              <Volume color="#4030a5"> </Volume>
            </IconWrapper>
          </IconsContainer>
          <Paragraph>
            <Elem
              content="Si vous ne trouvez pas votre boisson dans les choix de base, vous pouvez en paramétrer une. Vous pouvez
              aussi scanner l’étiquette de la bouteille."
            />
          </Paragraph>
          <Paragraph>
            <Elem
              content="Nous vous conseillons de noter vos consommation au fure et à mesure de la journée sans attendre le
              lendemain !"
            />
          </Paragraph>
          <Paragraph>
            <Elem
              content={
                "Un graphique vous permet de suivre vos consommation en unité d’alcool consommées sur une journée. {'\n\n'}La ligne verte représente le seuil de l’OMS. Elle est à 2 verres par jour pour une femme et 3 verres par jour pour un homme."
              }
            />
          </Paragraph>
          <Diagram asPreview />
          <Paragraph>
            <Elem
              content="Retrouvez le détail de vos consommations dans le fil du journal de l’onglet suivi. Vous pouvez les
              modifier ou les compléter pour les jours précédents."
            />
          </Paragraph>
        </TopContainer>
        <AddConsoCTAContainer>
          <ButtonPrimary
            onPress={() => navigation.push('ADD_DRINK', { timestamp: Date.now() })}
            content="Ajouter une consommation"
          />
        </AddConsoCTAContainer>
      </ScreenBgStyled>
    </Background>
  );
};

const ElemContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
`;

const ScreenBgStyled = styled.ScrollView`
  background-color: #f9f9f9;
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: 100%;
`;

const Paragraph = styled.View`
  margin-bottom: 25px;
`;

const TopContainer = styled.View`
  padding: 20px 30px 0px;
`;

const Spacer = styled.View`
  width: 5%;
`;

const TopTitle = styled.View`
  width: 95%;
  flex-direction: row;
  flex-shrink: 0;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const AddConsoCTAContainer = styled.View`
  margin-bottom: 100px;
  align-items: center;
`;
const IconsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 50px;
`;
const IconWrapper = styled.View`
  align-items: center;
`;
const Volume = styled(TextStyled)`
  margin-top: 5px;
`;
const EqualWrapper = styled.View`
  padding: 10px;
  padding-bottom: 50px;
`;