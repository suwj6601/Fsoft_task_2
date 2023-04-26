import StarCardInfo from "../StarCardInfo";
import { StarCardWrapper } from "./style";
import starWarImg from "../../image/starwar.png";

// const StarCard = (props: IStarCard) => {
const StarCard = (props: any) => {
  const cardInfo = props.cardInfo;
  const { hidden } = props;
  const filmAppearances = cardInfo?.films?.length;

  return (
    <StarCardWrapper>
      <div className="star__card-title">
        <h1 className="star__card-heading">{cardInfo?.name}</h1>
      </div>
      <div className="star__card-image">
        <img src={starWarImg} alt="star war" className="image"></img>
      </div>
      <div className="star__card-description">
        <StarCardInfo
          name="Max Speed"
          value={cardInfo?.max_atmosphering_speed}
          hidden={hidden}
          type="max_atmosphering_speed"
        />
        <StarCardInfo
          name="Credit Cost"
          value={cardInfo?.cost_in_credits}
          hidden={hidden}
          type="cost_in_credits"
        />
        <StarCardInfo
          name="Passengers"
          value={cardInfo?.passengers}
          hidden={hidden}
          type="passengers"
        />
        <StarCardInfo
          name="Film Appearances"
          value={filmAppearances}
          hidden={hidden}
          type="Film Appearances"
        />
      </div>
    </StarCardWrapper>
  );
};

export default StarCard;
