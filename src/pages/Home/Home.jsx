// import { useNavigate } from "react-router-dom";
// import {
//   HomeContainer,
//   HomeTitle,
//   StartNowBtn,
//   HomeText,
//   WrapperText,
//   WrapperImage,
// } from "./Home.styled";

// const HomePage = () => {
//   const navigate = useNavigate();
//   const handleStart = () => navigate("/catalog");

//   return (
//     <HomeContainer>
//       <HomeTitle>Campers of your dreams</HomeTitle>
//       <WrapperText>
//         <HomeText>
//         You can find everything you want in our catalog
//         </HomeText>
//       </WrapperText>
//       <WrapperImage>
//         <StartNowBtn onClick={handleStart}>View now</StartNowBtn>
//       </WrapperImage>
//     </HomeContainer>
//   );
// };

// export default HomePage;


import { useNavigate } from "react-router-dom";
import {
  HomeContainer,
  HomeTitle,
  StartNowBtn,
  HomeText,
  WrapperText,
  WrapperImage,
} from "./Home.styled";

const HomePage = () => {
  const navigate = useNavigate();
  const handleStart = () => navigate("/catalog");

  return (
    <HomeContainer>
      <WrapperImage>
      <WrapperText>
      <HomeTitle>Campers of your dreams</HomeTitle>
      <HomeText>
      You can find everything you want in our catalog
      </HomeText>
      <StartNowBtn onClick={handleStart}>View now</StartNowBtn>
      </WrapperText>
      </WrapperImage>
    </HomeContainer>
  );
};

export default HomePage;