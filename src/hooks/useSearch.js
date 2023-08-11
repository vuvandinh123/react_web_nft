import { useEffect, useRef, useState } from "react";
import { CollectionsApi } from "../api/CollectionsApi";
import { UserApi } from "../api/UserApi";
import { nftsAPI } from "../api/NftsApi";

const useSearch = () => {
    const [search, setSearch] = useState('');
    const searchInputRef = useRef(null);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [user, setUser] = useState([]);
    const [data,setData] = useState([]);
    const handleSubmitSearch = (e) => {
        e.preventDefault();
        const url = `/vvd-nft#/search?keyword=${search}`;
        window.location.href = url;
        if (searchInputRef.current) {
            searchInputRef.current.blur();
        }
    }
    const handleChangeSearch = (e) => {
        const value = e.target.value
        const search = data.filter((item) => {
            return item.name.toLowerCase().includes(value.toLowerCase());
        })
        const search2 = UserApi.filter((item) => {
            return item.name.toLowerCase().includes(value.toLowerCase());
        })
        setSearch(value);
        setProducts(search);
        setUser(search2);
    }
    useEffect(() => {
        // const params = {
        //     offset: 0,
        //     limit: 50
        // }
        // const fetchNfts = async () => {
        //     const res = await CollectionsApi.getTopCollections("24h",params);
        //     setData(res.data.collections);
        //     setProducts(res.data.collections);
        //     setLoading(false);
        // };
        // fetchNfts();
        
        // return () => {

        // }
    }, [])
    return {
        search,
        handleSubmitSearch,
        handleChangeSearch,
        loading,
        products,
        searchInputRef,
        user
    }
}
export default useSearch