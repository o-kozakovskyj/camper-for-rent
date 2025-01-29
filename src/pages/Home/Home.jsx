import { useNavigate } from "react-router-dom";
import * as Styled from "./Home.styled.jsx"
import { ButtonGeneral } from "../../components/ButtonGeneral/ButtonGeneral.jsx";
import { useIntl } from "react-intl";

const HomePage = () => {
  const navigate = useNavigate();
  const handleStart = () => navigate("/catalog");
  const intl = useIntl();
  return (
    <Styled.HomeContainer>
      <Styled.WrapperImage>
        <Styled.WrapperText>
          <Styled.HomeTitle>
            {intl.formatMessage({ id: "homeTitle" })}
          </Styled.HomeTitle>
          <Styled.HomeText>
            You can find everything you want in our catalog
          </Styled.HomeText>
          <ButtonGeneral onClick={handleStart}>View Now</ButtonGeneral>
        </Styled.WrapperText>
      </Styled.WrapperImage>
    </Styled.HomeContainer>
  );
};

export default HomePage;
