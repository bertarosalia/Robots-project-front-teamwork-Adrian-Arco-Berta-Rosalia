import CardStyled from "./CardStyled";

interface CardProps {
  name: string;
  speed: number;
  endurance: number;
  urlImage: string;
  creationDate: string;
}
const Card = ({
  creationDate,
  endurance,
  name,
  speed,
  urlImage,
}: CardProps): JSX.Element => {
  return (
    <CardStyled>
      <h2 className="card__title"> {name}</h2>
      <img
        width={"180px"}
        height={"200px"}
        className="card__image"
        src={urlImage}
        alt={name}
      />
      <ul className="card__info-block">
        <li className="info-block__info">Speed: {speed}</li>
        <li className="info-block__info">Endurance: {endurance}</li>
        <li className="info-block__info">Creation date: {creationDate}</li>
      </ul>
    </CardStyled>
  );
};

export default Card;
