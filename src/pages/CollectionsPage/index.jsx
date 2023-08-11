import { useRef, useState } from "react"
import { Accordion, CardList } from "../../components/Gloabal"
import { useDocumentTitle, useScrollTop } from "../../hooks"
import useNftsApi from "../../hooks/useNftsApi"

const category = [
    {
        id: 1,
        name: "ALL"
    },
    {
        id: 2,
        name: "Game"
    },
    {
        id: 3,
        name: "Collectibles"
    },
    {
        id: 4,
        name: "PFP"
    },
    {
        id: 5,
        name: "Art"
    },
    {
        id: 6,
        name: "Metaverse"
    },
    {
        id: 7,
        name: "DeFi"
    },
    {
        id: 8,
        name: "IP"
    },
    {
        id: 9,
        name: "Social"
    },
    {
        id: 10,
        name: "Music"
    },
    {
        id: 11,
        name: "Utility"
    },
    {
        id: 12,
        name: "Land"
    },
    {
        id: 13,
        name: "Domain Name"
    },
    {
        id: 14,
        name: "Photography"
    },
]


const CollectionsPage = () => {
    const [sidebar, setSidebar] = useState(false)
    const [time, setTime] = useState('24h')
    const [textTime, setTextTime] = useState('24h');
    const [cate, setCate] = useState('ALL')
    useScrollTop()
    const params = {
        by: 'price',
        category: cate || 'ALL',
        offset:  0,
        limit: 16,
    }
    const { nfts, loading, setLoaing } = useNftsApi(time, params);
    const handleClickCate = (e) => {
        let text = e.target.textContent.toUpperCase();
        if (text == "DOMAIN NAME") {
            text = "DOMAIN_NAME"
        }
        setCate(text)
        setLoaing(true); 
    }
    console.log(cate);
    const handleChangeLoader = (e) => {
        const value = e.target.value;
        setTime(value)
        if (value === "24h") {
            setTextTime("24h")
        }
        else if (value === "7d") {
            setTextTime("7 Day")
        }
        else if (value === "30d") {
            setTextTime("30 Day")
        }
        else if (value === "3M") {
            setTextTime("3 Month")
        }
        else if (value === "1y") {
            setTextTime("1 Year")
        }
        setLoaing(true);
    }
    useDocumentTitle("VVD | NFTs");
    return (
        <div className="container">
            <div className="collections">
                <div className="collections__header d-between">
                    <button onClick={() => setSidebar(!sidebar)}>
                        {!sidebar ? <i className="fa-solid fa-filter"></i>
                            :
                            <i className="fa-solid fa-filter-circle-xmark"></i>}</button>
                    <select name="" onChange={handleChangeLoader} id="">
                        <option value="24h">Top 24h</option>
                        <option value="7d">Top 7 Days</option>
                        <option value="30d">Top 30 Days</option>
                        <option value="3M">Top 3 Month</option>
                        <option value="1y">Top 1 Year</option>
                    </select>
                </div>
                <div className="collections__content">
                    <div className={`collections__sidebar text ${sidebar ? 'active' : ''}`}>
                        <div className="d-between">
                            <h3 className="fs-m">Filters</h3>
                            <span className="filter__close" onClick={() => setSidebar(!sidebar)} style={{ fontSize: "3rem" }}><i className="fa-solid fa-xmark"></i></span>
                        </div>
                        <div className="sticky">
                            <div className="scroll">

                                <Accordion title="Category">
                                    <ul className="category__filter" >
                                        {category.map((item) => (
                                            <li key={item.id} onClick={handleClickCate} className={`py-2 ${item.name.toLowerCase() == cate.toLowerCase() ? 'active' : ''}`}>
                                                <i className={`fa-regular ${item.name.toLowerCase() == cate.toLowerCase() ? 'fa-square-check' : 'fa-square'}  me-3`}></i>{item.name}</li>
                                        ))}
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
                    </div>

                    <div className="collections__body">
                        <div className="nft__header d-between text">
                            <h2 style={{ marginLeft: "20px", fontSize: "2.3rem", fontWeight: "bold" }}>Top NFTs on {textTime}</h2>
                            <span>123,231 item</span>
                        </div>
                        <div className="card__list">
                            <CardList qtyColumns={sidebar ? 3 : 4} loading={loading} setLoaing={setLoaing} products={nfts} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CollectionsPage
