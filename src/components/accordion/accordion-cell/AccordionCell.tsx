import { ReactElement, useState } from "react";
import { css, styled } from "styled-components";

export interface AccordionCellProps {
    title: string;
    children: ReactElement;
}

const Button = styled.span<{$triggered: boolean, $firstTriggered: boolean}>`
    transform: rotate(0);
    position: absolute;
    left: 1em;
    cursor: pointer;
    
    ${props => props.$triggered && css`
        transform: rotate(90deg);
        transition: transform .3s linear;
    `};

    ${props => !props.$triggered && !props.$firstTriggered && css`
        transform: rotate(0deg);
        transition: transform .3s linear;
    `};
`;

const Container = styled.div<{$expanded: boolean}>`
    height: 50px;
    display: flex;
    position: relative;
    justify-content: center;
    border: 3px solid gray;
    border-radius: 3px;
    width: 75%;

    ${props => props.$expanded && css`
        height: 150px;
    `};
`;

const Inner = styled.div`
    position: absolute;
    height: 100px;
    width: 100%;
    border-top: 1px solid black;
    top: 25%;
`;

const AccordionCell = ({ title, children } : AccordionCellProps) => {
    const [expanded, setExpanded] = useState(false);
    const [firstTriggered, setFirstTriggered] = useState(true);

    const handleClick = () => {
        setExpanded(!expanded);
        setFirstTriggered(false);
    }

    return <Container $expanded={expanded}>
        <Button $triggered={expanded} $firstTriggered={firstTriggered} onClick={handleClick}>&gt;</Button>
        <p><strong>{title}</strong></p>

        { expanded && <Inner>{children}</Inner> }
    </Container>
}

export default AccordionCell;