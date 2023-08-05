import { styled } from "styled-components"
import Slider from "react-slick";
import { useRef } from "react";
import { PropTypes } from "prop-types";

const StyledCategoryHome = styled.div`
  .arrow__header {
    display: flex;
    justify-content:space-between;
    flex-wrap: wrap;
    margin: 20px 0;
    color: var(--text-color);
    h3 {
      font-size: 3.5rem;
    }
    .arrow {
        display: flex;
        column-gap:5px;
        &__btn {
        color: #fff;
        font-size: 2rem;
        width: 40px;
        height: 40px;
        background-color: #192243;
        border-radius: 5px;
        transition: 0.2s;
        &:hover {
          background-color: #1e50ff;
          font-size:1.4rem;
      }
      }
      &__btn.disabale{
        color: #a4a4a4;
        cursor:default;
        &:hover {
          background-color:#192243;
          font-size:2rem;
        }
      }
    }
    

  }
  .arrow__content {
        .slick-track{
            display: flex;
            .slick-slide{
              margin-left: 20px;
            }
            .slick-slide:first-child{
              margin-left: 0px;
            }
            .slick-slide:last-child{
              margin-right: 0px;
            }
        }
  }
  
`
const ArrowSlick = ({ title, children, settings }) => {
  const arrowsRef = useRef(null);
  const handleClickNext = () => {
      arrowsRef.current.slickNext();
  }
  const handleClickPrev = () => {
    arrowsRef.current.slickPrev();
  }
  return (
    <StyledCategoryHome>
      <div className="arrow__header">
        <h3>{title || ""}</h3>
        <div className="arrow">
          <button id="prev" onClick={handleClickPrev} className="arrow__btn"   ><i className="fa-solid fa-arrow-left " /></button>
          <button id="next" onClick={handleClickNext} className="arrow__btn"><i className="fa-solid fa-arrow-right" /></button>
        </div>
      </div>
      <div className="arrow__content">
        <Slider ref={arrowsRef} {...settings}>{children}</Slider>
      </div>
    </StyledCategoryHome>
  )
}
ArrowSlick.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  settings: PropTypes.object,
}
export default ArrowSlick
