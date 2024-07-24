import React, { createContext, useState, useCallback } from 'react';

const BetContext = createContext();
const BetSetterContext = createContext();

const BetProvider = ({ children }) => {
    const [selectedBets, setSelectedBets] = useState({});

    const handleSelectedBets = useCallback((rowIndex, oddObj) => {
        const oddValue = oddObj?.O
        if (oddValue !== null && oddValue !== undefined && oddValue !== "") {
            setSelectedBets(prevSelectedBets => {
                const prevBets = {...prevSelectedBets};
                const prevOddObj = prevBets[rowIndex];
                if (prevOddObj !== undefined && prevOddObj.ID === oddObj.ID) {
                    delete prevBets[rowIndex]
                    return {
                        ...prevBets
                    }
                } else {
                    return {
                        ...prevBets,
                        [rowIndex]: oddObj
                    }
                }
            })
        }
    }, []);

    return (
        <BetContext.Provider value={selectedBets}>
            <BetSetterContext.Provider value={handleSelectedBets}>
                {children}
            </BetSetterContext.Provider>
        </BetContext.Provider>
    );
};

export { BetContext, BetProvider, BetSetterContext };
