import React, { FormEvent, useState } from "react";
import { ProtoRobot } from "../../features/interfaces/interfaces";
import useApi from "../../hooks/useApi";
import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  const { createRobot } = useApi();
  const initialRobot: ProtoRobot = {
    name: "",
    urlImg: "",
    creationDate: "",
    speed: 0,
    endurance: 0,
  };

  const [newRobot, setNewRobot] = useState(initialRobot);

  const onChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewRobot({
      ...newRobot,
      [event.target.id]: event.target.value,
    });
  };

  const hasEmptyFields =
    newRobot.name === "" ||
    newRobot.urlImg === "" ||
    newRobot.speed === 0 ||
    newRobot.endurance === 0;

  const createNewRobot = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await createRobot(newRobot);
    setNewRobot(initialRobot);
  };
  return (
    <FormStyled>
      <div className="form__container">
        <h2 className="form__title">New Robot</h2>
        <form
          data-testid="form"
          autoComplete="off"
          className="form"
          noValidate
          onSubmit={createNewRobot}
        >
          <div className="form__group">
            <label htmlFor="name">Name</label>
            <input
              data-testid="inputName"
              type="text"
              id="name"
              value={newRobot.name}
              onChange={onChangeField}
              className="form__input"
            />
          </div>
          <div className="form__group">
            <label htmlFor="urlImg">Url</label>
            <input
              data-testid="inputUrl"
              type="url"
              id="urlImg"
              value={newRobot.urlImg}
              onChange={onChangeField}
              className="form__input"
            />
          </div>
          <div className="form__group">
            <label htmlFor="creationDate">Creation Date</label>
            <input
              data-testid="inputDate"
              value={newRobot.creationDate}
              type="text"
              id="creationDate"
              onChange={onChangeField}
              className="form__input"
            />
          </div>
          <div className="form__group">
            <label htmlFor="speed">Speed</label>
            <input
              data-testid="inputSpeed"
              value={newRobot.speed}
              type="number"
              max={10}
              min={0}
              id="speed"
              onChange={onChangeField}
              className="form__input"
            />
          </div>
          <div className="form__group">
            <label htmlFor="endurance">Endurance</label>
            <input
              data-testid="inputEndurance"
              value={newRobot.endurance}
              type="number"
              max={10}
              min={0}
              id="endurance"
              onChange={onChangeField}
              className="form__input"
            />
          </div>
          <button
            type="submit"
            disabled={hasEmptyFields}
            className="button--submit"
          >
            Create
          </button>
        </form>
      </div>
    </FormStyled>
  );
};

export default Form;
