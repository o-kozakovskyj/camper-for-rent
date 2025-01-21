import sprite from "../../../assets/svg/sprite.svg";
import * as Styled from "./CamperCard.styled";
// import {
//   CamperImageContainer,
//   CamperInfoContainer,
//   CardContainer,
//   Description,
//   DetailsContainer,
//   LocationContainer,
//   MainInfoContainer,
//   MainLineContainer,
//   RatingInfo,
//   SecondaryInfoContainer,
//   SecondaryLineContainer,
// } from "./CamperCard.styled";
import capitalizeFirstLetter from "../../../utils/capitalize";
import { useState } from "react";
import Modal from "./../../../components/Modal/Modal";
import CamperDetails from "./../../../components/CamperDetails/CamperDetails";
import { useDispatch } from "react-redux";
import {
  addToFavoritesAction,
  removeFromFavoritesAction,
} from "../../../redux/favorites/favoritesSlice";
import { ButtonGeneral } from "../../ButtonGeneral/ButtonGeneral";
import HoverRating from "../../HoverRating/HoverRating";

const CamperCard = ({ camperInfo, favorited }) => {
  const dispatch = useDispatch();

  const [isFavorited, setIsFavorited] = useState(favorited);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleShowMore = () => {
    setIsModalOpen(true);
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  const {
    _id: id,
    gallery,
    name,
    price,
    rating,
    reviews,
    location,
    description,
    adults,
    engine,
    transmission,
    details: { beds },
  } = camperInfo ?? {};

  const handleClickFavorite = () => {
    if (!isFavorited) dispatch(addToFavoritesAction(id));
    else dispatch(removeFromFavoritesAction(id));

    setIsFavorited(!isFavorited);
  };

  const details = [
    {
      id: 1,
      icon: Styled.Automatic,
      title: "Automatic",
    },
    {
      id: 2,
      icon: Styled.Petrol,
      title: "Petrol",
    },
    {
      id: 3,
      icon: Styled.Coffee,
      title: "Kitchen",
    },
    {
      id: 4,
      icon: Styled.Air,
      title: "AC",
    },
  ];
  
  return (
    <>
      <Styled.CardContainer>
        <Styled.CamperImageContainer>
          <img src={gallery[0]} alt="Camper" width="290px" height="310px" />
        </Styled.CamperImageContainer>

        <Styled.CamperInfoContainer>
          <Styled.MainLineContainer>
            <Styled.MainInfoContainer>
              <h3>{name}</h3>

              <span>&#8364;{price}</span>
            </Styled.MainInfoContainer>

            <Styled.HeartButton onClick={handleClickFavorite}>
              <Styled.HeartIcon />
            </Styled.HeartButton>
          </Styled.MainLineContainer>

          <Styled.SecondaryLineContainer>
            {/* <RatingIcon width="16px" height="16px" fill="none">
              <use href={`${sprite}#icon-rating`} />
            </RatingIcon> */}
            <HoverRating />

            <Styled.SecondaryInfoContainer>
                  <Styled.RatingInfo>
                    {rating}({reviews.length} reviews)
                  </Styled.RatingInfo>

              <Styled.LocationContainer>
                <svg width="16px" height="16px" className="icon-fill">
                  <use href={`${sprite}#icon-Vector`} />
                </svg>
                <span>{location}</span>
              </Styled.LocationContainer>
            </Styled.SecondaryInfoContainer>
          </Styled.SecondaryLineContainer>

          <Styled.Description>{description}</Styled.Description>

          <Styled.DetailsContainer>
            {details.map(({ id, icon: Icon, title }) => (
              <Styled.Detail key={id}>
                <Styled.Paper elevation={3}>
                  <Icon />
                  <Styled.IconTitle>{title}</Styled.IconTitle>
                </Styled.Paper>
              </Styled.Detail>
            ))}

            {/* <li>
              <svg width="20px" height="20px">
                <use href={`${sprite}#icon-diagram`} />
              </svg>
              <span>{capitalizeFirstLetter(transmission)}</span>
            </li>
            <li>
              <svg width="20px" height="20px" className="icon-fill">
                <use href={`${sprite}#icon-petrol`} />
              </svg>
              <span>{capitalizeFirstLetter(engine)}</span>
            </li>
            <li>
              <svg width="20px" height="20px">
                <use href={`${sprite}#icon-cup-hot`} />
              </svg>
              <span>Kitchen</span>
            </li>

            <li>
              <svg width="20px" height="20px" className="icon-fill">
                <use href={`${sprite}#icon-wind`} />
              </svg>
              <span>AC</span>
            </li> */}
          </Styled.DetailsContainer>

          <ButtonGeneral onClick={handleShowMore}>Show More</ButtonGeneral>
        </Styled.CamperInfoContainer>
      </Styled.CardContainer>
      <Modal open={isModalOpen} onClose={onClose}>
        <CamperDetails camperInfo={camperInfo} />
      </Modal>
    </>
  );
};

export default CamperCard;
