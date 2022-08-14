import useApi from "./hooks/useApi";

const App = (): JSX.Element => {
  const { getAll } = useApi();

  return (
    <div className="App">
      <button
        onClick={() => {
          getAll();
        }}
      ></button>
    </div>
  );
};

export default App;
