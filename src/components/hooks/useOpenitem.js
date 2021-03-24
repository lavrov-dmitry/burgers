import { useState } from 'react';

export function useOpenitem () {
    const [ openItem, setOpenItem ] = useState(null);

    return { openItem, setOpenItem }
}