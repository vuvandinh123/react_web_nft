import { CategoryApi } from "../../api/CategoryApi";
import ArrowSlick from "../Gloabal/ArrowsSlick";
import { Button } from "../Gloabal";
import ImageLoader from "../Gloabal/ImageLoader";
import { useState } from "react";
import { PropTypes } from "prop-types";

const CardItem = ({ item }) => {
    const [follow, setFollow] = useState(true);
    const handleClickBtn = () => {
        setFollow(!follow);
    }
    return (
        <div className="artist-item">
            <div className="image">
                <ImageLoader src={item.image} />
            </div>
            <div className="background-artist">
                <ImageLoader src={item.image} />
            </div>
            <div className="card-title">
                <div>
                    <h4>Mitchell Starc</h4>
                    <p>20,600+ Items</p>
                </div>
                <div className="d-flex" style={{ justifyContent: "end" }}>
                    <Button width="80px" background={follow ? "#011aff" : "#777878"} height="35px" fontSize="1.4rem" data={item.id} handleClickBtn={handleClickBtn}>
                        {follow ? "Follow" : "UnFollow"}
                    </Button>
                </div>
            </div>
        </div>
    )
}
CardItem.propTypes = {
    item: PropTypes.object.isRequired,
}

const Artist = () => {
    const settings = {
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
        <div className="mt-4">
            <ArrowSlick settings={settings} title="Most Popular Artist">
                {CategoryApi.length > 0 && CategoryApi.map((item) => {
                    return (
                        <CardItem key={item.id} item={item} />
                    );
                })}
            </ArrowSlick>
        </div>

    )
}

export default Artist
