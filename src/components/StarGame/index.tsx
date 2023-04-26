import { useEffect, useState } from "react";
import StarCard from "../../common/StarCard";
import { StarCardWrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  actSetHiddenRandomStarShip,
  actSetSelectedRandomStarShip,
  actSetListStarShip,
} from "../../redux/action";
import axios from "axios";

const StarGame = () => {
  const dispatch = useDispatch();
  const movieStateReducer = useSelector((state: any) => state?.movieReducer);
  const [loadingApi, setLoadingApi] = useState(false);
  const [loadingRandomStarShip, setLoadingRandomStarShip] = useState(false);

  // get data from redux
  const listStarShip = movieStateReducer?.listStarShip;
  const selectedRandomCard = movieStateReducer?.selectedRandomCard;
  const hiddenRandomCard = movieStateReducer?.hiddenRandomCard;
  const totalTurn = movieStateReducer?.totalTurn;

  let arrayListStarShip: any[] = [];

  const getAllStarShipApi = async (url: string) => {
    await axios
      .get(url)
      .then((response) => {
        arrayListStarShip = [...arrayListStarShip, ...response?.data?.results];

        if (response?.data?.next) {
          getAllStarShipApi(response?.data?.next);
        } else {
          dispatch(actSetListStarShip(arrayListStarShip));

          // done loading api response
          setLoadingApi(true);
        }
      })
      .catch((error) => {
        console.log("err", error);
      });
  };

  const getTwoRandomCard = () => {
    const randomIndex1 = Math.floor(Math.random() * listStarShip.length - 1);
    let randomIndex2 = Math.floor(Math.random() * listStarShip.length - 1);

    if (randomIndex2 === randomIndex1) {
      randomIndex2--;
    }

    const randomItems = listStarShip
      .splice(randomIndex1, 1)
      .concat(listStarShip.splice(randomIndex2, 1));

    dispatch(actSetHiddenRandomStarShip(randomItems[1]));
    dispatch(actSetSelectedRandomStarShip(randomItems[0]));
  };

  useEffect(() => {
    if (!loadingApi) {
      getAllStarShipApi("https://swapi.dev/api/starships/");
    }
  }, []);

  useEffect(() => {
    // DOM elements
    const loadingElement = document.querySelector<HTMLElement>(".loading")!;

    // when loading API is complete and push to redux
    if (loadingApi && !loadingRandomStarShip) {
      loadingElement.style.display = "none";

      localStorage.setItem("allStarShip", JSON.stringify(listStarShip));
      setLoadingRandomStarShip(true);
    }

    getTwoRandomCard();
  }, [loadingRandomStarShip, loadingApi, totalTurn]);

  return (
    <StarCardWrapper>
      <StarCard cardInfo={selectedRandomCard} hidden={false} />
      <StarCard cardInfo={hiddenRandomCard} hidden={true} />
    </StarCardWrapper>
  );
};

export default StarGame;
