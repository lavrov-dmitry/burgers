import React from 'react';
import styled from 'styled-components'

const ChoicesWrap = styled.div`
    max-width: 550px;
    margin: 0 auto;
    column-count: 2;
    column-gap: 15px;
`;

const ChoicesRadio = styled.input`
    cursor: pointer;
    margin-right: 5px;
`;

const ChoicesLabel = styled.label`
    cursor: pointer;
    display: block;
`;

export function Choices({ chagneChoices, openItem, choice }) {

    return (
        <>
            <h3>Choices</h3>
            <ChoicesWrap>
                {openItem.choices.map((item, i) => (
                    <ChoicesLabel key={i}>
                        <ChoicesRadio
                        type="radio"
                        name="choices"
                        checked={choice === item}
                        value={item}
                        onChange={chagneChoices}
                        />
                        {item}
                    </ChoicesLabel>
                ))}
            </ChoicesWrap>
        </>
    )
}