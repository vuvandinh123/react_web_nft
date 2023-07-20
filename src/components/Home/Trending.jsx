import { styled } from "styled-components"
import card from "../../assets/images/products/card1.png";
import Button from "../Gloabal/Button";
import useCountDown from "../../hooks/useCountDown";
import Blur from "../Gloabal/Blur";
const StyledTrending = styled.div`
    margin: 20px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 50px;
  .trending__image {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .trending__content {
    margin-top: 50px;
    h2 {
      color: var(--color-text);
      font-size: 3.5rem;
    }

    > p {
      margin-top: 10px;
      color: var(--color-text);
      span {
        color: $primary;
      }
    }
    .time__sale {
      margin-top: 50px;
      display: flex;
      align-items: center;
      color: #fff;
      column-gap: 10px;
      &--item {
        background-color: #131528;
        width: 70px;
        height: 70px;
        text-align: center;

        span {
          display: block;
          padding: 10px 0;
          font-size: 2.5rem;
        }
      }
    }
    .trending__bid {
      margin: 30px 0;
      color: $gray;
    }
    h3 {
      color: var(--color-text);
      margin: 10px 0;
      font-weight: bold;
      font-size: 2.5rem;
    }
    .trending__btn {
      margin-top: 50px;
      display: flex;
      gap: 15px;
    }
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: auto;
  }
`
const Trending = () => {

  const timeCountDown = new Date("2023-10-28T12:00:00").getTime();
  const { coundownRef } = useCountDown({ timeCountDown });
  return (
    <>

      <StyledTrending>
      <Blur top="50%" left="100px" width="350px" height="250px" background="#ffae00" />
        <div className="trending__image">
          <img src={card} alt="" />
        </div>
        <div className="trending__content">
          <h2>JUNK FOOD PARTY #137</h2>
          <p>Created by <span> MitsuoKatori</span></p>
          <div className="time__sale" ref={coundownRef}>
            <div className="time__sale--item">
              <span className="days">0</span>
              <p>DAYS</p>
            </div>
            <div className="time__sale--item">
              <span className="hours">4</span>
              <p>HRS</p>
            </div>
            <div className="time__sale--item">
              <span className="minutes">14</span>
              <p>MINS</p>
            </div>
            <div className="time__sale--item">
              <span className="seconds">59</span>
              <p>SECS</p>
            </div>
          </div>
          <p className="trending__bid">Current Bid</p>
          <h3>1.0324 ETH</h3>
          <div className="trending__btn">
            <Button height="50px" width="150px" background="#1e50ff">Place a Bid</Button>
            <Button height="50px" background="#131528" width="150px">View Artwork</Button>
          </div>
        </div>
      </StyledTrending>
    </>
  )
}

export default Trending
