import { useState } from "react";
import Star from "./star/Star";
import { styled } from "styled-components";

const Span = styled.span`
        cursor: pointer;

        &:hover {
            filter: brightness(2);
        }
`;

const StarRating = () => {
    const [stars, setStars] = useState(new Array(5).fill({ clicked: false }));

    const handleClick = (index: number) => {
        const starsCp = [...stars.map(_ => {
            if (index >= 0) {
                index--;
                return { clicked: true };
            }

            return { clicked: false };
        })];

        setStars(starsCp);
    }

    return <>{stars.map((_, index) => <Span key={index} onClick={() => handleClick(index)}><Star checked={stars[index].clicked} /></Span>)}</>;
}

export default StarRating;