import styled from "styled-components";

const RobotsListStyled = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  .robots-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 2rem;

    &__title {
      text-align: center;
      font-size: 2 rem;
      color: #807776;
    }
  }
`;

export default RobotsListStyled;
