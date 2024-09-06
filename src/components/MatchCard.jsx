import { useState } from "react";
import style from "./MatchCard.module.css";
import { MobileMarkets } from "./MobileMarkets";

export const MatchCard = ({ matchData, rowIndex }) => {
const [isAllShown, setIsAllShown] = useState(false)
  return (
    <div className={style.matchCard}>
        <div className={style.flexBetween}>
            <h2 className={style.leagueName}>{matchData.LN}</h2>  
            <small>
                {matchData.D} {matchData.DAY} 
            </small>
        </div>
      <div className={style.flexBetween}>
            <h1 className={style.matchName}>{matchData.N}</h1>
            <small>
                {matchData.T}
            </small>
      </div>
      <button type='button' onClick={()=>setIsAllShown(!isAllShown)}> 
        Tümünü Gör
      </button>
      <MobileMarkets isVisible={isAllShown} markets={Object.values(matchData.OCG)} rowIndex={rowIndex}/>
    </div>
  );
};
