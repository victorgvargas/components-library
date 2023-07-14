import { useEffect, useState } from "react";
import { styled } from "styled-components";

interface PopoverProps {
    width: number;
    height: number;
    content: string;
    triggered: boolean;
}

const CloseButton = styled.button`
    position: absolute;
    right: 0;
    background-color: #FFFFFF;
    border: none;

    &: hover {
        cursor: pointer;
    }
`;

const Div = styled.div`
    position: relative;
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Container = styled.div<{$width?: number; $height?: number}>`
    position: absolute;
    z-index: 1000;
    width: ${props => props.$width ? props.$width + "px" : "200px"};
    height: ${props => props.$height ? props.$height + "px" : "25px"};
    top: calc(50% - ${props => (props.$width ?  props.$width / 2 : 12.5) + "px"});
    left: calc(50% - ${props => (props.$height ?  props.$height / 2 : 100) + "px"});
    border: 1px solid black;
    border-radius: 3px;
    padding: 1em;
`;

const Popover = ({width, height, content, triggered}: PopoverProps) => {
    const [closed, setClosed] = useState(false);

    const handleClose = () => {
        setClosed(!closed);
    }

    return !closed && triggered ? <Container $width={width} $height={height}>
        <Div>
            <CloseButton onClick={handleClose}>X</CloseButton>
            {content}
        </Div>
    </Container> : null;
}

export default Popover;