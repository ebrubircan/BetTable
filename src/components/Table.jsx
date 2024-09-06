import React, {lazy, Suspense } from "react";
import './styles.css';
import TableHeader from "./TableHeader";
import { BetProvider } from '../context/BetContext';
import style from "./Table.module.css";
import { useGetBets } from "../hooks/useGetBets";

const Coupon = lazy(() => import("./Coupon"));
const ScreenRenderer = lazy(() => import("./ScreenRenderer"));

function Table() {
  const{data,loading} = useGetBets()
  return (
    <BetProvider>
      <TableHeader count={data.length} />
      <div className={style.wrapper}>
        {loading ? (
          <div><span className="header-cell">Loading...</span></div>
        ) : (
          <Suspense fallback={<div><span className="header-cell">Loading...</span></div>}>
            <ScreenRenderer data={data} />
          </Suspense>
        )}
      </div>
      {
        !loading && (
          <Suspense fallback={<div>Coupon Loading...</div>}>
            <Coupon data={data} />
          </Suspense>
        )
      }
    </BetProvider>
  );
}

export default Table;
