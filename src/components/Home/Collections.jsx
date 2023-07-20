import fire from "../../assets/images/user/lua.png"
import CardList from "../Gloabal/CardList";
import Button from "../Gloabal/Button";
import { styled } from "styled-components";

const StyledCollection = styled.div`
    margin: 100px 0;
    .collecttion__title {
      h3 {
        font-size: 3.5rem;
        color: var(--color-text);
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
        <div className="collecttion__title">
          <h3>
            Featured Collections <img src={fire} alt />
          </h3>
          <p>
            Discover, collect, and sell extraordinary NFTs through our awesome
            platform.
          </p>
        </div>
        <CardList/>
        <div className="card__more">
          <Button height="50px">Views More</Button>
        </div>
      </StyledCollection>

    </>
  )
}

export default Collections
