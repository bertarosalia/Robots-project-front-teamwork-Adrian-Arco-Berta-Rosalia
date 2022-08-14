import Card from "./components/Card/Card";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Card
        urlImage=""
        creationDate=""
        endurance={3}
        name="asd"
        speed={3}
        key={"name"}
      ></Card>
    </div>
  );
};

export default App;
