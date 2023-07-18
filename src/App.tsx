import Carousel from "./components/carousel/Carousel";

function App() {
  const cells = [<div>Hello</div>, <div>World</div>, <div>I'm</div>, <div>Victor</div>, <div><img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/LARGE_elevation.jpg"/></div>]

  return (
    <div className="container">
      <Carousel children={cells} timer={3000}/>
    </div>
  );
}

export default App;
