import { useState } from "react"
import { Accordion, ArrowsSlick, CardList } from "../../components/Gloabal"
import { useDocumentTitle, useScrollTop } from "../../hooks"

const CollectionsPage = () => {
    const [sidebar, setSidebar] = useState(false)
    const [close, setClose] = useState(false);
    useScrollTop()
    useDocumentTitle("VVD | NFTs");
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
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
    const handleClickFilter = () => {
        setClose(true)
    }
    return (
        <div className="container">
            <div className="collections">
                <div className="collections__header d-between">
                    <button onClick={() => setSidebar(!sidebar)}>
                        {!sidebar ? <i className="fa-solid fa-filter"></i>
                            :
                            <i className="fa-solid fa-filter-circle-xmark"></i>}</button>
                    <select name="" id="">
                        <option value="">Most Relevent</option>
                        <option value="">Newest</option>
                        <option value="">Recently Listed</option>
                        <option value="">Most Likes</option>
                        <option value="">Most Views </option>
                    </select>
                </div>
                <div className="collections__content">
                    <div className={`collections__sidebar text ${sidebar ? 'active' : ''}`}>
                        <div className="d-between">
                            <h3 className="fs-m">Filters</h3>
                            <span className="filter__close" onClick={() => setSidebar(!sidebar)} style={{ fontSize: "3rem" }}><i className="fa-solid fa-xmark"></i></span>
                        </div>
                        <div className="sticky">
                            <Accordion title="Status">
                                <ul>
                                    <li className="py-2"><input type="checkbox" /> <label htmlFor=""> Buy Now</label></li>
                                    <li className=""><input type="checkbox" /> <label htmlFor=""> Buy Now</label></li>
                                </ul>

                            </Accordion>
                            <hr />
                            <Accordion title="Curation">
                                <ul>
                                    <li className="py-2"><input type="checkbox" /> <label htmlFor="">Curated</label></li>
                                    <li className=""><input type="checkbox" /> <label htmlFor="">Non-Curated</label></li>
                                </ul>

                            </Accordion>
                            <hr />
                            <Accordion title="Price">
                                <ul>
                                    <li className="py-2"><input type="checkbox" /> <label htmlFor="">Curated</label></li>
                                    <li className=""><input type="checkbox" /> <label htmlFor="">Non-Curated</label></li>
                                </ul>

                            </Accordion>
                            <hr />
                            <Accordion title="Curation">
                                <ul>
                                    <li className="py-2"><input type="checkbox" /> <label htmlFor="">Curated</label></li>
                                    <li className=""><input type="checkbox" /> <label htmlFor="">Non-Curated</label></li>
                                </ul>

                            </Accordion>
                        </div>
                    </div>

                    <div className="collections__body">
                        {/* <ArrowsSlick settings={settings} title="Collections">
                            <div >1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                            <div>5</div>
                            
                        </ArrowsSlick> */}
                        <div className="nft__header d-between text">
                            <h2>All NFTs</h2>
                            <span>123,231 item</span>
                        </div>

                        <CardList qtyColumns={sidebar ? 3 : 4} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CollectionsPage
