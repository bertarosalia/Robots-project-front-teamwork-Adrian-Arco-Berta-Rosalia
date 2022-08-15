import styled from "styled-components";

const FormStyled = styled.div`
  display: flex;
  justify-content: center;
  .form__container {
    background-color: greenyellow;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
  .form__title {
    margin-left: 20px;
    padding: 5px;
  }
  .form__input {
    width: 300px;
    padding: 5px;
  }
  .form__group {
    display: flex;
    flex-direction: column;
  }
  .button--submit {
    height: 30px;
    width: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: grey;
    color: white;
    border: 1px solid black;
  }
`;

export default FormStyled;
