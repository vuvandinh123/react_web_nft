import { useEffect, useState } from "react";
import { nftsAPI } from "../api/NftsApi";

export default function useNftsApi(time="24h",params={}) {

    const [loading,setLoaing] = useState(true);
    const [nfts, setNfts] = useState([]);

    useEffect(() => {
        const param = {
            by: 'price',
            category: params.category || 'ALL',
            offset: params.offset || 0,
            limit: params.limit || 8,
        }

            const fetchNfts = async () => {
                const res = await nftsAPI.getAll(time,param);
                setNfts(res.data.nfts);
                setLoaing(false);
                console.log("time out");
            };
            fetchNfts();
        return () => {
            // return setLoaing(false);
        }
        
    }, [params.offset,params.limit,params.category,time]);

    return {
        nfts,
        setLoaing,
        loading,
    }
}