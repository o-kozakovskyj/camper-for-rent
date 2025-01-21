import { useNavigate } from "react-router-dom";
import * as Styled from "./Home.styled.jsx"
import { ButtonGeneral } from "../../components/ButtonGeneral/ButtonGeneral.jsx";

const HomePage = () => {
  const navigate = useNavigate();
  const handleStart = () => navigate("/catalog");

  return (
    <Styled.HomeContainer>
      <Styled.WrapperImage>
        <Styled.WrapperText>
          <Styled.HomeTitle>Campers of your dreams</Styled.HomeTitle>
          <Styled.HomeText>You can find everything you want in our catalog</Styled.HomeText>
          <ButtonGeneral onClick={handleStart}>View Now</ButtonGeneral>
        </Styled.WrapperText>
      </Styled.WrapperImage>
    </Styled.HomeContainer>
  );
};

export default HomePage;
