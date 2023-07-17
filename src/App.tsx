import Accordion from "./components/accordion/Accordion";
import AccordionCell from "./components/accordion/accordion-cell/AccordionCell";

function App() {
  const cells = [
    <AccordionCell title="Accordion Component" children={<div>Hello</div>}/>, 
    <AccordionCell title="Accordion Component" children={<div>Hello</div>}/>,
    <AccordionCell title="Accordion Component" children={<div>Hello</div>}/>
  ]

  return (
    <Accordion cells={cells}/>
  );
}

export default App;
