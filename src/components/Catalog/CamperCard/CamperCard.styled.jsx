import { ListItem, List, IconButton, Box, styled, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import CoffeeIcon from '@mui/icons-material/Coffee';
import AirIcon from '@mui/icons-material/Air';

// import styled from "styled-components";

export const CardContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 24px;

  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;

  padding: 24px;
`;

export const CamperImageContainer = styled(Box)`
  width: 290px;
  height: 310px;

  border-radius: 10px;

  & img {
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const CamperInfoContainer = styled(Box)`
  width: 100%;
`;

export const MainLineContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  margin: 0 0 8px 0;
`;

export const MainInfoContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;

  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
`;


{/* <HeartButton
              width="24px"
              height="24px"
              fill="none"
              stroke="var(--main)"
              onClick={handleClickFavorite}
              className={isFavorited && "favorited"}
            >
              <use href={`${sprite}#icon-heart`} />
            </HeartButton> */}

export const HeartButton = styled(IconButton)`
width="24px"
height="24px"
`;

export const HeartIcon = styled(FavoriteBorderIcon)`

`;


export const SecondaryLineContainer = styled(Box)`

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;

  margin: 0 0 24px 0;
`;

// export const RatingIcon = styled.svg`
//   fill: var(--rating);
//   stroke: var(--rating);
// `;

export const RatingInfo = styled(props=> <Typography {...props} variant="span"/>)`
// export const RatingInfo = styled.span
  border-bottom: 1px solid var(--main);
`;

export const SecondaryInfoContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const LocationContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const Description = styled(Box)`
  margin: 0 0 24px 0;
  max-width: 525px;

  color: var(--secondary);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DetailsContainer = styled(List)`
`;

export const Detail = styled(ListItem)`
display: flex;
flex-direction: row;
align-items: center;
gap: 16px;
`;

export const Paper = styled(Box)`
  display: flex;
  gap: 8px;
  padding: 12px 18px;
  background-color: var(--block-features); /* Тема вашого фону */
  border-radius: 100px;
`;

export const Automatic = styled(AccountTreeIcon)`
`;

export const IconTitle = styled(props=> <Typography {...props} variant="span"/>)`
`;

export const Petrol = styled(LocalGasStationIcon)`
`;

export const Coffee = styled(CoffeeIcon)`
`;

export const Air = styled(AirIcon)`
`;
