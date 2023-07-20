
import { useState } from "react";
import { CategoryApi } from "../../api/CategoryApi";
import { useEffect } from "react";
import ArrowSlick from "../Gloabal/ArrowsSlick";

const CategoryHome = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        setCategory(CategoryApi);
    }, [category]);
    console.log(category);
    return (
        <>
        <ArrowSlick data={category} title="Browse by Category"/>
        </>
    )
}

export default CategoryHome
