import fire from "../../assets/images/user/lua.png"
import CardList from "../Gloabal/CardList";
import Button from "../Gloabal/Button";
import { styled } from "styled-components";

const StyledCollection = styled.div`
    margin: 100px 0;
    position: relative;
    .collecttion__title {
      h3 {
        font-size: 3.5rem;
        color: var(--text-color);
        font-weight: bold;
        text-align: center;
      }
      > p {
        color: gray;
        text-align: center;
        margin: 10px 0;
      }
    }
    
    .card__more {
      margin-top: 30px;
      display: flex;
      justify-content: center;
    }
`
const Collections = () => {
  return (
    <>

      <StyledCollection>
        <div className="collecttion__title m-5">
          <h3>
            Featured Collections <img src={fire} className="d-inline" alt="" />
          </h3>
          <p>
            Discover, collect, and sell extraordinary NFTs through our awesome
            platform.
          </p>
        </div>
        <CardList qtyColumns={4} />
        <div className="card__more">
          <Button tag="a" to={`/NFTs`} height="50px">Views More</Button>
        </div>
      </StyledCollection>

    </>
  )
}

export default Collections
