import Button from "../Gloabal/Button"
import { useEffect, useState } from "react"
import { CollectionsApi } from "../../api/CollectionsApi"


const TopCollections = () => {
    const [collections, setCollections] = useState([]);
    useEffect(() => {
        setCollections(CollectionsApi);
    }, [])
    return (
        <>
            <div className="top__collections relative">

                <div className="top__collections--header">
                    <h3>Top Collections</h3>
                    <div className="top__collections--btn">
                        <Button background="#011aff" width="100px" height="40px" fontSize="15px">Today</Button>
                        <Button background="#192243" width="100px" height="40px" fontSize="15px">Last 30 Day</Button>
                        <Button background="#192243" width="100px" height="40px" fontSize="15px">Last 7 Day</Button>
                    </div>
                </div>
                <div className="top__collections--content">
                    <div className="list-items ">
                        {
                            collections.length > 0 && collections.map((item) => {
                                return (
                                    <div key={item.id} className="clton-item">
                                        <div className="clton-img">
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div className="clton-title">
                                            <h4>{item.name}</h4>
                                            <p>{item.totalPrice}k ETH</p>
                                        </div>
                                        <div className={`trend ${item.change < 0 ? "brom" : ""}`}><span>
                                            {
                                                item.change > 0 ? "+" + item.change + "%" :
                                                    "" + item.change + "%"
                                            }
                                        </span>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className="collections-all">
                        <Button tag="a" fontSize="15px" background="#011aff" width="200px" height="50px">View All Collections</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopCollections
