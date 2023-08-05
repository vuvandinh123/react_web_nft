import { useEffect, useRef, useState } from "react";
import { CollectionsApi } from "../api/CollectionsApi";
import { UserApi } from "../api/UserApi";

const useSearch = () => {
    const [value, setValue] = useState('');
    const searchInputRef = useRef(null);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [user, setUser] = useState([]);
    const handleSubmitSearch = (e) => {
        e.preventDefault();
        const url = `/vvd-nft#/search?keyword=${value}`;
        window.location.href = url;
        if (searchInputRef.current) {
            searchInputRef.current.blur();
        }
    }
    const handleChangeSearch = (e) => {
        setValue(e.target.value);
    }
    useEffect(() => {
        const search = CollectionsApi.filter((item) => {
            return item.name.toLowerCase().includes(value.toLowerCase());
        })
        const search2 = UserApi.filter((item) => {
            return item.name.toLowerCase().includes(value.toLowerCase());
        })
        setProducts(search);
        setUser(search2);
        setLoading(false);
        return () => {

        }
    }, [value])
    return {
        value,
        handleSubmitSearch,
        handleChangeSearch,
        loading,
        products,
        searchInputRef,
        user
    }
}
export default useSearch