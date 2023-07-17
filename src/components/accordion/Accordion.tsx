import { AccordionCellProps } from "./accordion-cell/AccordionCell";

interface AccordionProps {
    cells: JSX.Element[];
}

const Accordion = ({cells}: AccordionProps) => {
    return <>
        {cells.map(cell => cell)}
    </>
}

export default Accordion;