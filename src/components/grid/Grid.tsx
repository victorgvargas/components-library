import { useState } from "react";
import { styled } from "styled-components";

interface GridProps {
    items: JSX.Element[];
}

const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
`;

const FlexItem = styled.div`
    width: 250px;
    height: 250px;
    border: 1px solid black;
    border-radius: 3px;
    overflow: hidden;
    margin: 0 25px 25px 0;
`;

const SearchBar = styled.input`
    max-width: 1075px;
    min-width: 632.5px;
    border: 1px solid black;
    border-radius: 3px;
    height: 25px;
    margin-bottom: 25px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Grid = ({ items }: GridProps) => {
    const [filteredItems, setFilteredItems] = useState(items);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchText = event.target.value.toLowerCase();

        setFilteredItems(items.filter(item => (item.props.children as string).toLowerCase().includes(searchText)));
    }

    return <Container>
        <SearchBar placeholder="Search..." type="text" onChange={handleChange}/>
        <FlexContainer>
            {filteredItems.map((item, index) => (
                <FlexItem key={index}>{item}</FlexItem>
            ))}
        </FlexContainer>
    </Container>;
}

export default Grid;