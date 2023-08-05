
import { CategoryApi } from "../../api/CategoryApi";
import ArrowSlick from "../Gloabal/ArrowsSlick";
import ImageLoader from "../Gloabal/ImageLoader";

function CategoryHome() {
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
        <>
           <div className="relative">
                <ArrowSlick settings={settings} title="Browse by Category">
                    {CategoryApi.length > 0 && CategoryApi.map((item) => {
                        return (
                            <div className="category__home" key={item.id}>
                                <div className="arrow__image">
                                    <ImageLoader src={item.image} alt={item.name} />
                                </div>
                                <div className="arrow__item--footer">
                                    <a href="#">{item.name}</a>
                                </div>
                            </div>
                        );
                    })}
                </ArrowSlick>
            </div>


        </>
    );
}

export default CategoryHome
