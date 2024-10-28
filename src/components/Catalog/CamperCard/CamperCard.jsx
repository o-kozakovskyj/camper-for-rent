import sprite from "../../../assets/svg/sprite.svg";
import {
  CamperImageContainer,
  CamperInfoContainer,
  CardContainer,
  Description,
  DetailsContainer,
  HeartButton,
  LocationContainer,
  MainInfoContainer,
  MainLineContainer,
  RatingIcon,
  RatingInfo,
  SecondaryInfoContainer,
  SecondaryLineContainer,
  ShowMoreButton,
} from "./CamperCard.styled";
import capitalizeFirstLetter from "../../../utils/capitalize";
import { useState } from "react";
import Modal from "./../../../components/Modal/Modal";
import CamperDetails from "./../../../components/CamperDetails/CamperDetails";
import { useDispatch } from "react-redux";
import {
  addToFavoritesAction,
  removeFromFavoritesAction,
} from "../../../redux/favorites/favoritesSlice";

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

  return (
    <>
      <CardContainer>
        <CamperImageContainer>
          <img src={gallery[0]} alt="Camper" width="290px" height="310px" />
        </CamperImageContainer>

        <CamperInfoContainer>
          <MainLineContainer>
            <MainInfoContainer>
              <h3>{name}</h3>

              <span>&#8364;{price}</span>
            </MainInfoContainer>

            <HeartButton
              width="24px"
              height="24px"
              fill="none"
              stroke="var(--main)"
              onClick={handleClickFavorite}
              className={isFavorited && "favorited"}
            >
              <use href={`${sprite}#icon-heart`} />
            </HeartButton>
          </MainLineContainer>

          <SecondaryLineContainer>
            <RatingIcon width="16px" height="16px" fill="none">
              <use href={`${sprite}#icon-rating`} />
            </RatingIcon>

            <SecondaryInfoContainer>
              <RatingInfo>
                {rating}({reviews.length} reviews)
              </RatingInfo>

              <LocationContainer>
                <svg width="16px" height="16px" className="icon-fill">
                  <use href={`${sprite}#icon-Vector`} />
                </svg>
                <span>{location}</span>
              </LocationContainer>
            </SecondaryInfoContainer>
          </SecondaryLineContainer>

          <Description>{description}</Description>

          <DetailsContainer>
            <li>
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
            </li>
          </DetailsContainer>

          <ShowMoreButton onClick={handleShowMore}>Show More</ShowMoreButton>
        </CamperInfoContainer>
      </CardContainer>
      <Modal open={isModalOpen} onClose={onClose}>
        <CamperDetails camperInfo={camperInfo} />
      </Modal>
    </>
  );
};

export default CamperCard;
