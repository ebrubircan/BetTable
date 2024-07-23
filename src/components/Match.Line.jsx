import React, {memo} from 'react';
import EventCount from './EventCount'
import {extractMBS, extractOdds} from '../helper';

const oddsKeys = ["1-0", "1-1", "1-2", "5-25", "5-26", "1-H1", "1-X", "1-2", "2-H2", "2-3", "2-4", "2-5", "1-Var", "1-Yok", "+99"];
const MatchLine = ({rowIndex, event, isBetSelected, handleBetClick, })=> {
    console.log( rowIndex + ' rendered ' + event.LN)
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
                                className={isBetSelected(rowIndex, key) ? 'selected' : ''}
                                onClick={() => handleBetClick(rowIndex, key, extractOdds(event.OCG, ...key.split('-')))}
                            >
                                {extractOdds(event.OCG, ...key.split('-'))}
                            </td>
                        ))}
                    </tr>
                </React.Fragment>
    )
}


export default memo(MatchLine)