import { Platform } from 'react-native';
import styled, { css } from 'styled-components';
import { mediaHeight } from '../styles/mediaQueries';

const bigH1 = css`
  font-size: 23px;
  line-height: 30px;
`;

const mediumH1 = css`
  font-size: 20px;
  line-height: 30px;
`;

const smallH1 = css`
  font-size: 17px;
  line-height: 25px;
`;

const H1 = styled.Text`
  color: #4030a5;
  font-weight: ${Platform.OS === 'android' ? 'bold' : '800'};
  ${bigH1}
  ${mediaHeight.medium`${mediumH1}`}
  ${mediaHeight.small`${smallH1}`}
`;

export default H1;
