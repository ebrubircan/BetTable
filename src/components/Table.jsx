import React, { useEffect, useState, lazy, Suspense } from "react";
import axios from "axios";
import './styles.css';
import TableHeader from "./TableHeader";
import { BetProvider } from '../context/BetContext';
import { calculateScreenHeight } from "../utils/helpers";


const Coupon = lazy(() => import("./Coupon"))
const ScreenRenderer = lazy(() => import("./ScreenRenderer"))

function Table() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [screenHeight, setScreenHeight] = useState("auto");

    useEffect(() => {       
        try{
            axios.get('https://nesine-case-study.onrender.com/bets').then((res)=>{
                setData(res.data);
                setIsLoading(false);
                setScreenHeight(calculateScreenHeight(res.data.length));
            })
        } catch {
            setIsLoading(false);
        }
    }, []);

    return (
        <BetProvider>
            <>
                <style>
                    {`body {
                        height: ${screenHeight}px;
                    }`}
                </style>
                <table className="table">
                    <TableHeader count={data.length} />
                    <tbody>
                        {isLoading ? (
                            <tr><td colSpan="19">Loading...</td></tr>
                        ) : (
                            <ScreenRenderer data={data} />
                        )}
                    </tbody>
                </table>
                {
                    !isLoading && (
                        <Suspense fallback={<div>Coupon Loading...</div>}>
                            <Coupon data={data} />
                        </Suspense>
                    )
                }
            </>
        </BetProvider>
    );
}

export default Table;
