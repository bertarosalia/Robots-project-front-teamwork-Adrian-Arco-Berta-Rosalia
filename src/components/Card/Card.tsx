import CardStyled from "../CardStyled";

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
      <img
        width={"180px"}
        height={"200px"}
        className="card__image"
        src={urlImage}
        alt={name}
      />
      <div className="card__info-block">
        <span className="info-block__info">Name: {name}</span>
        <span className="info-block__info">Speed: {speed}</span>
        <span className="info-block__info">Endurance: {endurance}</span>
        <span className="info-block__info">Creation date: {creationDate}</span>
      </div>
    </CardStyled>
  );
};

export default Card;
