import React, { createContext, useState } from 'react';

const BetContext = createContext();

const BetProvider = ({ children }) => {
    const [selectedBets, setSelectedBets] = useState({});
    const [data, setData] = useState([]);

    return (
        <BetContext.Provider value={{ selectedBets, setSelectedBets, data, setData }}>
            {children}
        </BetContext.Provider>
    );
};

export { BetContext, BetProvider };
