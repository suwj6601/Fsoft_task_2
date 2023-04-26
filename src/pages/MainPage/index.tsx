import { MainPageBackground, MainPageContent, MainPageWrapper } from "./style";
import StarGame from "../../components/StarGame";
import LoadingAnimation from "../../common/LoadingAnimation";
import GameScore from "../../components/GameScore";

const MainPage = () => {
  return (
    <>
      <MainPageWrapper>
        <MainPageBackground />

        <MainPageContent>
          <StarGame />
        </MainPageContent>
        <LoadingAnimation />
      </MainPageWrapper>
      <GameScore />
    </>
  );
};

export default MainPage;
