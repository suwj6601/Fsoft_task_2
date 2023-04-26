import { MainPageBackground, MainPageContent, MainPageWrapper } from "./style";
import StarGame from "../../components/StarGame";
import LoadingAnimation from "../../common/LoadingAnimation";
import DisplayGameScore from "../../components/DisplayGameScore";

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
      <DisplayGameScore />
    </>
  );
};

export default MainPage;
