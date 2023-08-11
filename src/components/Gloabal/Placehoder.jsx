import { PropTypes } from "prop-types"
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

const Placehoder = ({col}) => {
    return (
        <div className="card placehoder" style={{ '--col': col }}>
            <div className="card__image relative">
                <Skeleton baseColor='#cfcfcfdc' width="100%" height="100%" />
            </div>
            <div className="card__content p-0">
                <div className="card__title mt-3"><Skeleton baseColor='#cfcfcfdc' width="70%" height="25px" /></div>
                <div className="card__outher mt-2">
                    <Skeleton baseColor='#cfcfcfdc' width="40%" height="15px" />
                </div>
                <div className="card__bottom">
                    <div className="card__price mt-2">
                        <Skeleton baseColor='#cfcfcfdc' width="100px" height="25px" />
                    </div>
                    <div className="card__time mt-2">
                    <Skeleton baseColor='#cfcfcfdc' width="100px" height="25px" />
                    </div>
                </div>
            </div>
        </div>
    )
}
Placehoder.propTypes = {
    col:PropTypes.number
}

export default Placehoder
