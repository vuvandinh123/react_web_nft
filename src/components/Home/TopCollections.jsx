import Button from "../Gloabal/Button"
import { useEffect, useState } from "react"
import { useGetTopCollections } from "../../hooks/API";
import Skeleton from "react-loading-skeleton";
import { formatPrice } from "../../utils";


const TopCollections = () => {
    // const [collections, setCollections] = useState([]);
    const [rank, setRank] = useState("24h");
    // const [loading,setLoading] = useState(false);
    const { collections, loading, setLoading } = useGetTopCollections(rank);
    console.log(collections);
    const handleClickBtn24H = () => {
        setRank("24h");
        setLoading(true);
    }
    const handleClickBtn7D = () => {
        setRank("7d");
        setLoading(true);
    }
    const handleClickBtn30D = () => {
        setRank("30d");
        setLoading(true);
    }
    return (
        <>
            <div className="top__collections relative">

                <div className="top__collections--header">
                    <h3>Top Collections</h3>
                    <div className="top__collections--btn">
                        <Button handleClickBtn={handleClickBtn24H} background={rank == "24h" ? "#011aff" : "#192243"} width="100px" height="40px" fontSize="15px">Today</Button>
                        <Button handleClickBtn={handleClickBtn7D} background={rank == "7d" ? "#011aff" : "#192243"} width="100px" height="40px" fontSize="15px">Last 7 Day</Button>
                        <Button handleClickBtn={handleClickBtn30D} background={rank == "30d" ? "#011aff" : "#192243"} width="100px" height="40px" fontSize="15px">Last 30 Day</Button>
                    </div>
                </div>
                <div className="top__collections--content">
                    <div className="list-items ">
                        {
                            collections.length > 0 && collections.map((item) => {
                                return (
                                    <div key={item.id} className="clton-item">
                                        <div className="clton-img">
                                            {loading ? <Skeleton circle={true} baseColor='#cfcfcfdc' className='d-inline' width="50px" height="50px" /> : <img src={item.logo} alt="" />}
                                        </div>
                                        <div className="clton-title">

                                            <h4 className="ellip" >
                                                {loading ? <Skeleton baseColor='#cfcfcfdc' className='d-inline' width="180px" height="20px" /> : <>{item.name}</>}
                                            </h4>
                                            <p>{loading ?
                                                <Skeleton baseColor='#cfcfcfdc' className='d-inline' width="50px" height="10px" />
                                                :
                                                <><i style={{ marginRight: "5px" }} className="fa-brands fa-ethereum text-yellow"></i>{formatPrice(parseFloat(item.volume_eth.toFixed(2)))}k ETH</>}</p>
                                        </div>
                                        <div className={`trend ${item.market_cap_change_percentage < 0 ? "brom" : ""}`}><span>
                                            {loading ?
                                                <Skeleton baseColor='#cfcfcfdc' className='d-inline' width="30px" height="15px" />
                                                :
                                                <>{parseFloat(item.market_cap_change_percentage.toFixed(2)) + " %"}</>}

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
