import { styled } from "styled-components"
import Card from "./Card"
import {PropTypes} from "prop-types"
import { ProductApi } from "../../api/ProductApi"
import { useEffect, useState } from "react"
import Placehoder from "./Placehoder"
const StyledCardList = styled.div`
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(${(props) => props.qtyColumns || 3},1fr);
    grid-column-gap: 40px;
    grid-row-gap: 20px;
    margin-top: 50px;
    @media only screen and (max-width: 987px) {
        grid-template-columns: 1fr 1fr;
    }
    @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`
const CardList = (props) => {
    const {qtyColumns} = props
    const [product,setProduct] = useState([]);
    const placehoder = Array(3).fill(null);
    useEffect(() =>{
        const item = setTimeout(() =>{
            setProduct(ProductApi)
        },500)
        return () =>{
            clearTimeout(item)
        }
    },[])
    let card;
    if(product.length === 0){
         card = placehoder.map((item,index)=>(<Placehoder key={index}/>))
    }
    else{

         card  = product.map((item)=>(<Card key={item.id} name={item.name} price={item.price} image={item.image} author={item.author} description={item.description}/>))
    }
    return (
        <div>
            <StyledCardList qtyColumns={qtyColumns}>
                    {card}
            </StyledCardList>
        </div>
    )
}
CardList.propTypes = {
    qtyColumns: PropTypes.number
}

export default CardList
