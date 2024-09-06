import { useContext } from "react";
import style from "./MobileMarket.module.css";
import { BetContext, BetSetterContext } from "../context/BetContext";

export const MobileMarket = ({ market, rowIndex }) => {
  const handleSelectedBets = useContext(BetSetterContext);
  const selectedBets = useContext(BetContext);
  const selectedBet = selectedBets[rowIndex]?.key;
  const handleSelect = (key, odd) => {
    handleSelectedBets(rowIndex, {
      ...odd,
      key: key,
    });
  };
  return (
    <div>
      <h3 className={style.marketTitle}>{market.N}</h3>
      <div className={style.oddContainer}>
        {Object.keys(market.OC).map((outcome) => {
          const OcKey = `${market.ID}-${outcome}`;
          return (
            <div className={style.oddWrapper} key={outcome}>
              <small>{OcKey}</small>
              <button
            
                type={"button"}
                className={selectedBet === OcKey ? "selected" : ""}
                onClick={() => handleSelect(OcKey, market.OC[outcome])}
              >
                {market.OC[outcome].O}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
