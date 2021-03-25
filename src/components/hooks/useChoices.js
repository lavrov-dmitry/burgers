import { useState } from 'react';

export function useCoices() {
    const [choice, setChoice] = useState();

    function chagneChoices(e) {
        setChoice(e.target.value);
    }

    return {choice, chagneChoices};
}