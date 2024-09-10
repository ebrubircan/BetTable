import { useContext, useMemo, useState } from "react";
import { BetContext } from "../context/BetContext";
import Coupon from "./Coupon";

const CouponCalculation = ({ data }) => {
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
    <Coupon
      data={data}
      selectedBets={selectedBets}
      totalAmount={totalAmount}
      maxKazanc={maxKazanc}
      selectedAmount={selectedAmount}
      onSelectChange={handleSelectChange}
    />
  );
};

export default CouponCalculation;
