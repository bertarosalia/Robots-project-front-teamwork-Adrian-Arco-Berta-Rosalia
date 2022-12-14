import CardStyled from "./CardStyled";

interface CardProps {
  creationDate: string;
  endurance: number;
  name: string;
  speed: number;
  urlImg: string;
  id: string;
}
const Card = ({
  creationDate,
  endurance,
  name,
  speed,
  urlImg,
  id,
}: CardProps): JSX.Element => {
  return (
    <CardStyled>
      <h2 className="card__title"> {name}</h2>
      <img
        width={"180px"}
        height={"200px"}
        className="card__image"
        src={urlImg}
        alt={name}
      />
      <ul className="card__info-block">
        <li key={id} className="info-block__info">
          Speed: {speed}
        </li>
        <li key={id} className="info-block__info">
          Endurance: {endurance}
        </li>
        <li key={id} className="info-block__info">
          Creation date: {creationDate}
        </li>
      </ul>
    </CardStyled>
  );
};

export default Card;
