import homeBackground from "../../assets/img/home-background.jpg";
import { Box, styled, Typography } from "@mui/material";

export const HomeContainer = styled(Box)`
  position: relative;
  width: 100%;
  height: calc(100vh - 57px);
`;

export const WrapperImage = styled(Box)`
  background-image: url(${homeBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

export const WrapperText = styled(Box)`
  position: absolute;
  margin-left: 10vw;
  margin-top: 40vh;
`;

export const HomeTitle = styled((props) => (
  <Typography {...props} variant="h1" />
))`
  font-weight: 600;
  font-size: 48px;
  color: #f7f7f7;
`;

export const HomeText = styled(Box)`
  font-weight: 600;
  font-size: 24px;
  color: #f7f7f7;
  margin-bottom: 28px;
`;
