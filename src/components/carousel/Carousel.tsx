import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

interface CarouselProps {
  children: React.ReactNode[];
  timer: number;
}

const Container = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid gray;
  border-radius: 3px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
    max-width: 100%;
    z-index: -1000;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Bullet = styled.span<{$current: boolean}>`
    border-radius: 50%;
    border: 1px solid black;
    width: 12.5px;
    height: 12.5px;
    margin: 0 2.5px;
    bottom: 10px;
    
    &:hover {
        cursor: pointer;
    }

    ${props => props.$current && css`
        background-color: black;
    `}
`;

const Bullets = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 10px;
    width: 100%;
`;

const Arrow = styled.span<{$next: boolean}>`
    font-size: 48px;
    font-color: gray;
    position: absolute;
    top: calc(50% - 24px);
    cursor: pointer;

    ${props => props.$next && css`
        right: 10px;
    `};

    ${props => !props.$next && css`
        left: 10px;
    `};
`;

const Carousel = ({ children, timer }: CarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const bullets = new Array(5).fill(<Bullet $current={false}/>);

  useEffect(() => {
    const swipeInterval = setInterval(() => {
      setCurrent((prev) => {
        if (prev === children.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, timer);

    setIntervalId(swipeInterval);

    return () => clearInterval(swipeInterval);
  }, [children, timer]);

  const resetInterval = () => {
    if (intervalId) {
        clearInterval(intervalId);
    }

    const newIntervalId = setInterval(() => {
        setCurrent(prev => (prev === children.length - 1 ? 0 : prev + 1));
    }, timer);
    
    setIntervalId(newIntervalId);
  }

  const handleArrowClick = (next: boolean) => {
    resetInterval();

    if (next && current === children.length - 1) setCurrent(-1);
    if (!next && current === 0) setCurrent(children.length);

    if (next) setCurrent((prev) => prev + 1);
    else setCurrent ((prev => prev - 1));
  }

  const handleBulletClick = (index: number) => {
    resetInterval();
    setCurrent(index);
  }

  return (
        <Container>
            <Inner>{children[current]}</Inner>
            <Arrow $next onClick={() => handleArrowClick(true)}>&gt;</Arrow>
            <Arrow $next={false} onClick={() => handleArrowClick(false)}>&lt;</Arrow>
            <Bullets>{bullets.map((_, index) => <Bullet key={index} $current={index === current} onClick={() => handleBulletClick(index)}/>)}</Bullets>
        </Container>
    );
};

export default Carousel;
