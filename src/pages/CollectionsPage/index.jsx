import { useState } from "react"
import { Accordion, ArrowsSlick, Card, CardList } from "../../components/Gloabal"
import { useDocumentTitle, useGetNFT, useScrollTop } from "../../hooks"
import useNftsApi from "../../hooks/useNftsApi"

const CollectionsPage = () => {
    const [sidebar, setSidebar] = useState(false)
    useScrollTop()
    const {nfts} = useNftsApi(0,20);
    console.log(nfts);
    useDocumentTitle("VVD | NFTs");
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
                        <div className="nft__header d-between text">
                            <h2>All NFTs</h2>
                            <span>123,231 item</span>
                        </div>
                        {/* <Card col={qtyColumns} key={item.id} id={item.id} name={item.name} price={item.last_price.value} image={item.image} last_deal_time={item.last_deal_time} author={item.owner.address} description={item.description}/> */}
                        <div className="card__list">
                            <CardList qtyColumns={sidebar ? 3 : 4} products={nfts}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CollectionsPage
