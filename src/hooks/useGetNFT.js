import { useEffect, useState } from "react";
import { nftsAPI } from "../api/NftsApi";

export default function useNftsApi(offset=0,limit=8) {

    const [nfts, setNfts] = useState([]);
    useEffect(() => {
        const params = {
            offset: offset || 0,
            limit: limit || 8
        }
        const fetchNfts = async () => {
            const res = await nftsAPI.getNFTs(params);
            setNfts(res.data.assets);
        };
        fetchNfts();
        return () => {
            
        }

    }, [offset,limit]);

    return {
        nfts
    }
}