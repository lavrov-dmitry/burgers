import React from 'react';
import styled from 'styled-components'

const CountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CountInput = styled.input`
    width: 50px;
    font-size: 20px;
    height: 100%;
`;

const ButtomCount = styled.button`
    background-color: transparent;
    border: 1px solid #000;
    height: 100%;
    width: 30px;
`;


export function CountItem({ count, setCount, onChange }) {
    
    return (
        <CountWrapper>
            <span>Count</span>
            <div>
                <ButtomCount disabled={count==1} onClick={() => setCount(+count-1)}>-</ButtomCount>
                <CountInput
                type="number"
                min="1"
                max="100"
                value={count < 1 ? 1 : count}
                onChange={onChange}/>
                <ButtomCount onClick={() => setCount(+count+1)}>+</ButtomCount>
            </div>
        </CountWrapper>
    )

}