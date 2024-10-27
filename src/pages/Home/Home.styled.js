import styled from "styled-components";
import { PrimaryButton } from "./../../styles/components.styled";
import homeBackground from "../../assets/img/home-background.jpg";

export const HomeContainer = styled.div`
 
`;

export const WrapperText = styled.div`

padding: 0px;

position: absolute;
margin-left: 64px;
margin-top: 260px;

`;
export const HomeTitle = styled.h1`
  margin-bottom: 16px;
  font-family: 'Inter', sans-serif;
  font-size: 48px;
  line-height: 1.2;
  color:#f7f7f7;

// text-align:left;
// vertical-align:text-top;
// font-size:48px;
// font-family:Inter;
// line-height:32px;
// border-style:hidden;
// outline:none;
// width:571px;
`;
export const HomeText = styled.p`
  // max-width: 800px;
  // font-size: 18px;
  // text-align: right;

  color:#f7f7f7;
text-align:left;
vertical-align:text-top;
font-size:24px;
font-family:Inter;
line-height:32px;
border-style:hidden;
outline:none;
width:550px;
margin-bottom: 40px;
`;

export const WrapperImage = styled.div`
  position: relative;
  width: 100%;
  min-height: 696px;
  margin: 0 auto;
  background-image: url(${homeBackground});

  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
`;

export const StartNowBtn = styled(PrimaryButton)`
  padding: 16px 60px;
  /* Search */


font-weight: 500;


`;
