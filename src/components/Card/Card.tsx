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
  return <></>;
};

export default Card;
