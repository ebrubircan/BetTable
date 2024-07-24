import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import './styles.css';
import MatchLine from "./Match.Line";
import TableHeader from "./TableHeader";
import Coupon from "./Coupon";
import { BetProvider } from '../context/BetContext';

function Table() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
       
        try{
            axios.get('https://nesine-case-study.onrender.com/bets').then((res)=>{
                setData(res.data);
                setIsLoading(false);
            })
        } catch {
            setIsLoading(false);
        }
    }, []);

    const MatchRows = useMemo(() => (
        data.map((event, rowIndex) => {
            return <MatchLine key = {rowIndex} rowIndex = {rowIndex} event= {event}/>
        })
    ), [data]);

    return (
        <div className="container">
            <BetProvider>
                <div className="mt-3">
                    <table className="table">
                        <TableHeader count={data.length} />
                        <tbody>
                            {MatchRows}
                            {isLoading && (
                                <tr><td colSpan="19">Loading...</td></tr>
                            )}
                        </tbody>
                    </table>
                    <Coupon data={data} />
                </div>
            </BetProvider>
        </div>
    );
}

export default Table;
