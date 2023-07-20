import { styled } from "styled-components"
import heart1 from "../../../public/Heart.svg"
import heart2 from "../../../public/Heart2.svg"
import { useState } from "react"
import { PropTypes } from "prop-types"
const StyledProduct = styled.div`
  position: relative;
  background-color: var(--card);
  padding: 20px;
  color: #fff;
  border-radius: 10px;
  max-height: 582px;
  cursor: pointer;
  .card__heart {
    position: absolute;
    right: 30px;
    top: 30px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
      img {
        width: 50%;
        transition: 0.3s;
      }
      &:hover img {
        transform: scale(1.2);
      }
    }
.card__image {
  margin-bottom: 20px;
  height: 400px;
  overflow: hidden;
  border-radius: 10px;
  transition: 0.3s;
  max-height: 400px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.card__content {
  .card__title {
    font-size: 2rem;
    font-weight: bold;
    color: var(--color-text);
    margin: 15px 0;
  }
  .card__outher {
    color: gray;
    font-size: 1.5rem;
    margin: 15px 0;
    span {
      color: #1e50ff;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .card__bottom {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    .card__price {
      color: gray;
      h4 {
        margin: 5px 0;
        color: var(--color-text);
      }
    }
    .card__time {
      color: gray;
      h5 {
        text-align: center;
        margin: 5px 0;
        color: var(--color-text);
      }
    }
  }
}
  .card__btn {
    opacity: 0;
    visibility: hidden;
    margin-top: 20px;
    transition: 0.4s;
    left: 0;
    right: 0;
    a {
      display: block;
      width: 100%;
      height: 40px;
      border-radius: 10px;
      background-color: #1e61fd;
      color: #fff;
      line-height: 40px;
      text-align: center;
      transition: 0.2s;
      position: relative;
      overflow: hidden;
      &::before {
    content: "";
    left: 0;
    top: 0;
    width: 0px;
    transform: rotate(10deg);
    height: 100%;
    position: absolute;
    background-color: #ffffffb9;
    display: block;
    z-index: 99;
    transition: 0.4s;
  }
  &:hover::before {
    width: 50px;
    left: 110%;
  }
  }
}
  &:hover .card__image {
    height: 340px;
  }
  &:hover .card__btn {
    opacity: 1;
    position: static;
    visibility: initial;
  }
`
const Card = (props) => {
  const [heart,setHeart] = useState(false);
  const {name,price,author,image} = props;
  return (
    <StyledProduct>
      <div onClick={()=>setHeart(!heart)} className="card__heart">
        <img className="" src={heart ? heart1 : heart2} alt="" />
      </div>
      <div className="card__image">
        <img src={`./src/assets/images/products/${image}`} alt="" />
      </div>
      <div className="card__content">
        <div className="card__title">{name}</div>
        <div className="card__outher">
          Created by <span>{author}</span>
        </div>
        <div className="card__bottom">
          <div className="card__price">
            <p>Current Bid</p>
            <h4>{price} ETH</h4>
          </div>
          <div className="card__time">
            <p>Remaining Time</p>
            <h5>
              <span className="card-hours"> 12</span> :
              <span className="card-min">03</span> :
              <span className="card-sec">12</span>
            </h5>
          </div>
        </div>
      </div>
      <div className="card__btn">
        <a href="#">Collect Now</a>
      </div>
    </StyledProduct>
  )
}
Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}
export default Card
