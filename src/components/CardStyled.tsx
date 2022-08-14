import styled from "styled-components";

const CardStyled = styled.div`
  width: 230px;
  height: 300px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  background-color: aliceblue;
  .card__image {
    border: 1px solid black;
    max-width: 100%;
  }
  .card__info-block {
    display: flex;
    justify-content: left;
    flex-direction: column;
    width: 100%;
  }
  .info-block__info {
    padding-left: 24px;
  }
`;

export default CardStyled;
