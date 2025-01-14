import React from 'react';
import styled from 'styled-components';
import TextStyled from '../../components/TextStyled';

const Sources = ({ content }) => {
  return (
    <SourceContainer>
      <Title>Sources :</Title>
      <TextParagraph>{content}</TextParagraph>
    </SourceContainer>
  );
};
export default Sources;

const TextParagraph = styled(TextStyled)`
  margin-bottom: 8px;
  font-size: 11px;
`;
const Title = styled(TextStyled)`
  margin-bottom: 8px;
  font-size: 13px;
  font-weight: bold;
  font-style: italic;
`;

const SourceContainer = styled.View`
  margin-top: 20px;
`;
