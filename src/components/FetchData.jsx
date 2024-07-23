import React, { useEffect, useCallback, useMemo, useContext, useState } from "react";
import axios from "axios";
import { BetContext } from './BetContext';
import './styles.css';
import {extractMBS, extractOdds} from '../helper';
import MatchLine from "./Match.Line";

function FetchData() {
    const { data, setData, selectedBets, setSelectedBets } = useContext(BetContext);
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

    const handleBetClick = useCallback((rowIndex, betKey, betValue) => {
        if (betValue !== null && betValue !== undefined && betValue !== "") {
            if (Object.keys(selectedBets).length >= 4 && !selectedBets[rowIndex]) {
                alert('You can only select up to 4 bets.');
                return;
            }
            setSelectedBets(prevSelectedBets => ({
                ...prevSelectedBets,
                [rowIndex]: betKey
            }));
        }
    }, [selectedBets, setSelectedBets]);

    const isBetSelected = useCallback((rowIndex, betKey) => {
        return selectedBets[rowIndex] === betKey;
    }, [selectedBets]);


    const totalAmount = useMemo(() => {
        return Object.values(selectedBets).reduce((total, betKey) => {
            const rowIndex = Object.keys(selectedBets).find(key => selectedBets[key] === betKey);
            const odds = extractOdds(data[rowIndex]?.OCG || {}, ...betKey.split('-'));
            return total + (parseFloat(odds) || 0);
        }, 0).toFixed(2);
    }, [selectedBets, data]);

    return (
        <div className="container">
            <div className="mt-3">
                <table className="table">
                    <thead>
                        <tr>
                            <th colSpan="7">Event Count: {data.length}</th>
                            <th>Yorumlar</th>
                            <th>MBS</th>
                            {["1", "X", "2", "Alt", "Üst", "H1", "1", "X", "2", "H2", "1-X", "1-2", "X-2", "Var", "Yok", "+99"].map((key, index) => (
                                <th key={index}>{key}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((event, rowIndex) => {
                            return ( <MatchLine key = {rowIndex} rowIndex = {rowIndex} event= {event} isBetSelected={isBetSelected} handleBetClick={handleBetClick}/>
                            );
                        })}
                        {isLoading && (
                            <tr><td colSpan="19">Loading...</td></tr>
                        )}
                    </tbody>
                </table>
                <div className="small-table-container">
                    <table className="small-table">
                        <tbody>
                            {Object.entries(selectedBets).map(([rowIndex, betKey]) => {
                                const user = data[rowIndex];
                                const odds = extractOdds(user?.OCG || {}, ...betKey.split('-'));
                                const mbs = extractMBS(user?.OCG || {});
                                return (
                                    <tr key={rowIndex}>
                                        <td>
                                            {`${mbs} Kod: ${user?.C || ''} Maç: ${user?.N || ''} `}
                                            <span style={{ fontWeight: 'bold' }}>{`Oran: ${odds}`}</span>
                                        </td>
                                    </tr>
                                );
                            })}
                            <tr>
                                <td className="total-row">
                                    Toplam Tutar: {totalAmount} TL
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default FetchData;
