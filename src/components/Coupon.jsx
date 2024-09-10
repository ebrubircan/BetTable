import { useContext, useMemo, useState } from "react";
import { BetContext } from "../context/BetContext";
import CouponRow from "./CouponRow";
import SelectBox from "./SelectBox";
import style from "./Coupon.module.css"

const Coupon = ({ data }) => {
  const selectedBets = useContext(BetContext);
  const betsArr = Object.values(selectedBets);

  const [selectedAmount, setSelectedAmount] = useState(30);

  const totalAmount = useMemo(() => {
    if (betsArr.length === 0) return 0;
  
    return betsArr
      .reduce((total, odd) => {
        return total * (parseFloat(odd.O) || 1);
      }, 1) 
      .toFixed(2);
  }, [betsArr]);

  const maxKazanc = useMemo(() => {
    return (totalAmount * selectedAmount).toFixed(2);
  }, [totalAmount, selectedAmount]);

  const handleSelectChange = (event) => {
    setSelectedAmount(event.target.value);
  };

  return (
    <div className={style.smallTableContainer}>
      <table className={style.smallTable}>
        <tbody>
          {Object.entries(selectedBets).map(([rowIndex, odd]) => {
            const event = data[rowIndex];
            const odds = odd.O;
            const mbs = odd.MBS;

            return (
              <CouponRow
                key={rowIndex}
                mbs={mbs}
                odds={odds}
                code={event?.C}
                match={event.N}
              />
            );
          })}

          <tr>
            <td>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                  Max Oran: {totalAmount}
                </div>
                <div>
                  <SelectBox
                    value={selectedAmount}
                    onChange={handleSelectChange}
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Max Kazanç: {maxKazanc} TL</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Coupon;
