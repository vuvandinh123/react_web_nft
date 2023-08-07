import { useEffect, useState } from "react";
import { nftsAPI } from "../api/NftsApi";

export default function useGetId(address,id) {

    const [nfts, setNfts] = useState([]);
    const [price,setPrice] = useState({});
    useEffect(() => {
        const fetchNfts = async () => {
            const res = await nftsAPI.get(address,id);
            const res2 = await nftsAPI.getPrice(address,id);
            setNfts(res.data);
            setPrice(res2.data);
        };
        fetchNfts();
        return () => {
            
        }

    }, [id,address]);

    return {
        nfts,
        price,
    }
}