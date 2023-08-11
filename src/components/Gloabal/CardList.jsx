import { styled } from "styled-components"
import Card from "./Card"
import { PropTypes } from "prop-types"
import Placehoder from "./Placehoder"
const StyledCardList = styled.div`
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    @media only screen and (max-width: 987px) {
        grid-template-columns: 1fr 1fr;
    }
    @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`
const CardList = (props) => {
    const { qtyColumns, products, loading } = props
    const placehoder = Array(12).fill(null);

    return (
        <div>
            <StyledCardList qtyColumns={qtyColumns}>
                {
                    loading ? 
                    placehoder.map((item, index) => (<Placehoder col={qtyColumns} key={index} />)) 
                    :
                    products.map((item) => (<Card col={qtyColumns} address={item.contract_address} key={item.token_id} id={item.token_id} name={item.name} price={item.last_price.value} image={item.image} last_deal_time={item.last_deal_time} author={item.owner?.address} description={item.description} />))
                }
            </StyledCardList>
        </div>
    )
}
CardList.propTypes = {
    qtyColumns: PropTypes.number,
    products: PropTypes.array,
    loading: PropTypes.bool,
}

export default CardList
