import React, { memo, useContext } from 'react';
import EventCount from './EventCount';
import { BetSetterContext, BetContext } from '../context/BetContext';
import { extractMBS, extractOdds } from '../utils/helpers';
import { oddsKeys } from '../utils/constants';

const MatchLine = ({ rowIndex, event }) => {
  const handleSelectedBets = useContext(BetSetterContext);
  const selectedBets = useContext(BetContext);
  const selectedBet = selectedBets[rowIndex]?.key;

  const handleSelect = (key) => {
    handleSelectedBets(rowIndex, {
      ...extractOdds(event.OCG, ...key.split('-')),
      key: key 
    });
  };

  return (
    <div className="container">
      <div className="table-row">
        <span className="event-cell" colSpan="7">
          <div className="event-detail">{event.D} {event.DAY} {event.LN}</div>
        </span>
        <span className="event-cell">Yorumlar</span>
        {[" ", "1", "X", "2", "Alt", "Üst", "H1", "1", "2", "H2", "1-X", "1-2", "X-2", "Var", "Yok", "+99"].map((key, index) => (
          <span key={index} className="event-cell">{key}</span>
        ))}
      </div>
      <div className="table-row">
        <span className="event-cell" colSpan="7"><EventCount event={event} /></span>
        <span className="event-cell">Yorumlar</span>
        <span className="event-cell">{extractMBS(event.OCG)}</span>
        {oddsKeys.map((key, index) => (
          <span
            key={index}
            className={`event-cell ${key === selectedBet ? 'selected' : ''}`}
            onClick={() => handleSelect(key)}
          >
            {extractOdds(event.OCG, ...key.split('-'))?.O}
          </span>
        ))}
      </div>
    </div>
  );
};

export default memo(MatchLine);
