import { BetProvider } from "../context/BetContext";
import { useGetBets } from "../hooks/useGetBets";
import Coupon from "./Coupon";
import { MatchCard } from "./MatchCard";

export const MobileContainer = () => {
  const { data, loading } = useGetBets();
  if (loading) {
    return "Yükleniyor";
  }
  return (
    <BetProvider>
      {data.map((matchData, index) => {
        return (
          <MatchCard key={matchData.C} matchData={matchData} rowIndex={index} />
        );
      })}
      <Coupon data={data} />
    </BetProvider>
  );
};
