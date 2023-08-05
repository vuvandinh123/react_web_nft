
const Detail = () => {
    return (
        <>
            <div className="d-between mb-2">
                <span className='text-acc'>Category</span>
                <span>Premium</span>
            </div>
            <div className="d-between mb-2">
                <span className='text-acc'>Creator</span>
                <div className='d-flex'>
                    <img style={{ borderRadius: "50%" }} width={"20px"} height={"20px"} className='d-inline me-2' src="https://public.nftstatic.com/static/nft/webp/cf66bd860fb147199032c4711a75d3c7_64x64.webp" alt="" />
                    BinanceNFT
                </div>
            </div>
            <div className="d-between mb-2">
                <span className='text-acc'>Owner</span>
                <div className='d-flex'>
                    <img style={{ borderRadius: "50%" }} width={"20px"} height={"20px"} className='d-inline me-2' src="https://public.nftstatic.com/static/nft/webp/de822c6fff6e400c99146b0661d17b51_64x64.webp" alt="" />
                    Zunaira_Nouman123
                </div>
            </div>
            <div className="d-between mb-2">
                <span className='text-acc'>Network</span>
                <span>BNB Chain</span>
            </div>
            <div className="d-between mb-2">
                <span className='text-acc'>Contract Address</span>
                <span>0x102a...33a7</span>
            </div>
            <div className="d-between mb-2">
                <span className='text-acc'>Token ID</span>
                <div className='d-flex'>
                    1019300827352
                </div>
            </div>
            <div className="d-between mb-2">
                <span className='text-acc'>Royalty Fee</span>
                <span>1%</span>
            </div>
            <div className="d-between mb-2">
                <span className='text-acc'>Platform Fee</span>
                <span>1%</span>
            </div>
        </>
    )
}

export default Detail
