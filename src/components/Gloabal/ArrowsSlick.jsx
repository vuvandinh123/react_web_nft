import { styled } from "styled-components"
import Slider from "react-slick";
import { useRef } from "react";
import { checkPropTypes } from "prop-types";
import ImageLoader from "./ImageLoader";
const StyledCategoryHome = styled.div`
  .arrow__header {
    display: flex;
    justify-content:space-between;
    flex-wrap: wrap;
    margin: 20px 0;
    color: var(--color-text);
    h3 {
      font-size: 3.5rem;
    }
    .arow {
        display: flex;
        column-gap:5px;
      button {
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
    }
  }
  .arrow__content {
        .slick-track{
            display: flex;
            column-gap: 20px;
        }
      .arrow__card--item {
        background-color: var(--card);
        border-radius: 10px;
        padding: 10px;
        margin: 10px;
        cursor: pointer;
        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          margin-right: 0;
        }
        &:hover{
            border:1px solid #577bff; 
            box-shadow: rgba(0, 128, 255, 0.2) 0px 8px 24px;
        }
        &:hover .arrow__item--footer a {
          background-color: #1e50ff;
        }
      }
      .arrow__image {
        margin-bottom: 15px;
        overflow: hidden;
        border-radius: 10px;
        height: 90%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.3s;
        }
        &:hover img {
          transform: scale(1.1);
        }
      }
      .arrow__item--footer {
        font-weight: bold;
        font-size: 1.4rem;
        a {
          color: #fff;
          padding: 10px 20px;
          background-color: #192243;
          border-radius: 10px;
          width: 100%;
          display: block;
          text-align: center;
          transition: 0.3s;
        }
      }    
  }
`
const ArrowSlick = ({ data,title }) => {
    const arrowsRef = useRef(null);
    const handleClickNext = () => {
        arrowsRef.current.slickNext();
    }
    const handleClickPrev = () => {
        arrowsRef.current.slickPrev();
    }
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <StyledCategoryHome>
            <div className="arrow__header">
                <h3>{title || ""}</h3>
                <div className="arow">
                    <button id="prev" onClick={handleClickPrev} className="" ><i className="fa-solid fa-arrow-left " /></button>
                    <button id="next" onClick={handleClickNext}><i className="fa-solid fa-arrow-right" /></button>
                </div>
            </div>
            <div className="arrow__content">
                <Slider ref={arrowsRef} {...settings}>
                    {
                         data.length > 0 && data.map((item, index) => {
                            return (
                                <div key={index} className="arrow__card--item">
                                    <div className="arrow__image">
                                        <ImageLoader src={item.image} alt={item.name} />
                                    </div>
                                    <div className="arrow__item--footer">
                                        <a href="#">{item.name}</a>
                                    </div>
                                </div>
                            )
                        })
                    }

                </Slider>
            </div>
        </StyledCategoryHome>
    )
}
ArrowSlick.propTypes = {
    data: checkPropTypes.object,
    title: checkPropTypes.string
}
export default ArrowSlick
