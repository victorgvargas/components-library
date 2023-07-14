import { useState } from "react";
import Popover from "./components/popover/Popover";

function App() {
  const [triggerPopup, setTriggerPopup] = useState(false);

  const openPopup = () => {
    setTriggerPopup(true);
  }

  return (
    <div>
      <button onClick={openPopup}>Click me!</button>

      <Popover width={300} height={300} triggered={triggerPopup} content="Popover inner text" />
    </div>
  );
}

export default App;
