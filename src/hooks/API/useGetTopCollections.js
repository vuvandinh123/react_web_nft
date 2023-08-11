import { useEffect, useState } from "react";
import { CollectionsApi } from "../../api/CollectionsApi";

export default function useGetTopCollections(time) {

    const [collections, setCollections] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        const params = {
            offset:  0,
            limit:  12
        }
        const fetchNfts = async () => {
            const res = await CollectionsApi.getTopCollections(time,params);
            setCollections(res.data.collections);
            setLoading(false);
            console.log("aaa");
        };
        fetchNfts();
        return () => {
            
        }

    }, [time]);

    return {
        collections,
        setLoading,
        loading,
    }
}