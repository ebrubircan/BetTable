import React, { memo, useContext } from 'react';
import EventCount from './EventCount';
import { BetSetterContext, BetContext } from '../context/BetContext';
import { extractMBS, extractOdds } from '../utils/helpers';
import { oddsKeys } from '../utils/constants';
import tableStyle from "./Table.module.css";

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
    <>
      <div className={tableStyle.wrapperFirstCol}>
        <div className={tableStyle.firstCol}>
          {event.D} {event.DAY} {event.LN}
        </div>
        <div className={tableStyle.eventCell}>Yorumlar</div>
        {[" ", "1", "X", "2", "Alt", "Üst", "H1", "1", "2", "H2", "1-X", "1-2", "X-2", "Var", "Yok", "+99"].map((key, index) => (
          <div key={index} className={tableStyle.eventCell}>{key}</div>
        ))}
      </div>
      <div className={tableStyle.wrapper}>
        <EventCount event={event}/>
        <div className={tableStyle.eventCell}>Yorumlar</div>
        <div className={tableStyle.eventCell}>{extractMBS(event.OCG)}</div>
        {oddsKeys.map((key, index) => (
          <div
            key={index}
            className={`${tableStyle.eventCell} ${key === selectedBet ? tableStyle.selected : ''}`}
            onClick={() => handleSelect(key)}
          >
            {extractOdds(event.OCG, ...key.split('-'))?.O}
          </div>
        ))}
      </div>
    </>
  );
};

export default memo(MatchLine);
