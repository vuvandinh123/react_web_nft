import { useEffect, useState } from "react";
import { nftsAPI } from "../api/NftsApi";

export default function useNftsApi(offset=0,limit=8) {

    const [nfts, setNfts] = useState([]);
    // const clearLocalStorage = () => {
    //     localStorage.removeItem('nfts');
    //   };
    useEffect(() => {
        const params = {
            by: 'price',
            category: 'ALL',
            offset: offset,
            limit: limit,
        }
        // if (localStorage.getItem("nfts")) {
        //     setNfts(JSON.parse(localStorage.getItem("nfts")));
        // }
        // else{
            const fetchNfts = async () => {
                const res = await nftsAPI.getAll(params);
                setNfts(res.data.nfts);
                localStorage.setItem("nfts", JSON.stringify(res.data.nfts));
            };
            fetchNfts();
        // }
        // const timeout = setTimeout(clearLocalStorage, 600000);
        return () => {
            // clearTimeout(timeout);
        }
        
    }, [offset,limit]);

    return {
        nfts
    }
}