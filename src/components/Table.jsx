import React, { useEffect, useState, lazy, Suspense } from "react";
import axios from "axios";
import './styles.css';
import TableHeader from "./TableHeader";
import { BetProvider } from '../context/BetContext';

const Coupon = lazy(() => import("./Coupon"));
const ScreenRenderer = lazy(() => import("./ScreenRenderer"));

function Table() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {       
    axios.get('https://nesine-case-study.onrender.com/bets')
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  return (
    <BetProvider>
      <div id="root">
        <div className="table">
          <TableHeader count={data.length} />
          <div className="table-body">
            {isLoading ? (
              <div className="table-row"><span className="header-cell" colSpan="19">Loading...</span></div>
            ) : (
              <Suspense fallback={<div className="table-row"><span className="header-cell" colSpan="19">Loading...</span></div>}>
                <ScreenRenderer data={data} />
              </Suspense>
            )}
          </div>
        </div>
        {
          !isLoading && (
            <Suspense fallback={<div>Coupon Loading...</div>}>
              <Coupon data={data} />
            </Suspense>
          )
        }
      </div>
    </BetProvider>
  );
}

export default Table;
