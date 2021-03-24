import React from 'react';
import styled from 'styled-components'

const ToppingWrapper = styled.div`
    max-width: 550px;
    margin: 0 auto;
    column-count: 2;
    column-gap: 15px;
`;

const TopingLabel = styled.label`
    cursor: pointer;
    display: block;
`;

const ToppingCheckbox = styled.input`
    cursor: pointer;
    margin-right: 5px;
`;


export function Toppings({ toppings, checkToppings }) {
    return (
        <>
            <h3>Toppings</h3>
            <ToppingWrapper>
                {toppings.map((item, i) => (
                    <TopingLabel key={i}>
                        <ToppingCheckbox
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => checkToppings(i)}
                        />
                        {item.name}
                    </TopingLabel>
                ))}
            </ToppingWrapper>
        </>
    )
}