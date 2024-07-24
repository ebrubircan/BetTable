import { useContext, useMemo } from "react";
import { BetContext } from "../context/BetContext";
import CouponRow from "./CouponRow";

const Coupon = ({data}) => {
  const selectedBets = useContext(BetContext);
  const betsArr = Object.values(selectedBets);

  const totalAmount = useMemo(() => {
    if (betsArr.length === 0) return 0;

    return betsArr.reduce((total, odd) => {
        return total + (parseFloat(odd.O) || 0);
    }, 0).toFixed(2);
  }, [betsArr]);

  return (
    <div className="small-table-container">
        <table className="small-table">
            <tbody>
                {Object.entries(selectedBets).map(([rowIndex, odd]) => {
                    const event = data[rowIndex];
                    const odds = odd.O;
                    const mbs = odd.MBS;

                    return <CouponRow key={rowIndex} mbs={mbs} odds={odds} code={event?.C} match={event.N} />;
                })}
                <tr>
                    <td className="total-row">
                        Toplam Tutar: {totalAmount} TL
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Coupon;
