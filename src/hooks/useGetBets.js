import axios from "axios";
import { useEffect, useState } from "react";

export const useGetBets = () => {

    const [data,setData] = useState([])
    const [loading,setIsLoading] = useState(true)
    
    useEffect(() => {       
        axios.get('https://nesine-case-study.onrender.com/bets')
          .then((res) => {
            setData(res.data);
            setIsLoading(false);
          })
          .catch(() => setIsLoading(false));
      }, []);

    return {data,loading} 
}