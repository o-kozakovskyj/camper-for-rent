import sprite from "../../../assets/svg/sprite.svg";
import capitalizeFirstLetter from "../../../utils/capitalize";
import {
  DetailsList,
  HorizontalLine,
  MoreDetailsContainer,
  VehicleDetailsHeader,
  VehicleDetailsList,
  MoreDetailsDiv,
} from "./Features.styled";
import Booking from "../Booking/Booking";

const Features = ({ camperInfo }) => {
  const {
    adults,
    transmission,
    engine,
    form,
    length,
    width,
    height,
    tank,
    consumption,
    details: { beds, airConditioner, hob },
  } = camperInfo ?? {};

  return (
    <MoreDetailsContainer>
      <MoreDetailsDiv>
        <DetailsList>
          <li>
            <svg width="20px" height="20px">
              <use href={`${sprite}#icon-diagram`} />
            </svg>
            <span>{capitalizeFirstLetter(transmission)}</span>
          </li>

          <li>
            <svg width="20px" height="20px" className="icon-fill">
              <use href={`${sprite}#icon-ac`} />
            </svg>
            <span>AC</span>
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
              <use href={`${sprite}#icon-ui-radios`} />
            </svg>
            <span>Radio</span>
          </li>
        </DetailsList>

        <VehicleDetailsHeader>Vehicle Details</VehicleDetailsHeader>

        <HorizontalLine />

        <VehicleDetailsList>
          <li>
            <span>Form</span> <span>{capitalizeFirstLetter(form)}</span>
          </li>
          <li>
            <span>Length</span> <span>{length}</span>
          </li>
          <li>
            <span>Width</span> <span>{width}</span>
          </li>
          <li>
            <span>Height</span> <span>{height}</span>
          </li>
          <li>
            <span>Tank</span> <span>{tank}</span>
          </li>
          <li>
            <span>Consumption</span> <span>{consumption}</span>
          </li>
        </VehicleDetailsList>
      </MoreDetailsDiv>

      <Booking />
    </MoreDetailsContainer>
  );
};

export default Features;
