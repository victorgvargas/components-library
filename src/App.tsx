import Grid from "./components/grid/Grid";

function App() {
  const cells = [<div>Hello</div>, <div>World</div>, <div>I'm</div>, <div>Victor</div>, <div>!</div>]

  return (
    <div className="container">
      <Grid items={cells} />
    </div>
  );
}

export default App;
