import React, {memo, useContext, useState} from 'react';
import { BetSetterContext } from '../context/BetContext';
import EventCount from './EventCount'
import {extractMBS, extractOdds} from '../utils/helpers';
import { oddsKeys } from '../utils/constants';

const MatchLine = ({rowIndex, event })=> {
    const handleSelectedBets = useContext(BetSetterContext);
    const [selectedBet, setSelectedBet] = useState();

    const handleSelect = (value) => {
        setSelectedBet((prevValue) => value === prevValue ? null : value)
    }

    return (
        <React.Fragment key={rowIndex}>
            <tr>
                <td colSpan="7" className="event-cell">
                    <div className="event-detail">{`${event.D} ${event.DAY} ${event.LN}`}</div>
                </td>
                <td>Yorumlar</td>
                <td></td>
                {["1", "X", "2", "Alt", "Üst", "H1", "1", "X", "2", "H2", "1-X", "1-2", "X-2", "Var", "Yok", "+99"].map((key, index) => (
                    <td key={index} className="header-cell">{key}</td>
                ))}
            </tr>
            <tr>
            
                <td colSpan="7"><EventCount event={event}/></td>
                <td>Yorumlar</td>
                <td>{extractMBS(event.OCG)}</td>
                {oddsKeys.map((key, index) => (
                    <td
                        key={index}
                        className={key === selectedBet ? 'selected' : ''}
                        onClick={() => {
                            handleSelect(key);
                            handleSelectedBets(rowIndex, extractOdds(event.OCG, ...key.split('-')))
                        }}
                    >
                        {extractOdds(event.OCG, ...key.split('-'))?.O}
                    </td>
                ))}
            </tr>
        </React.Fragment>
    )
}


export default memo(MatchLine)