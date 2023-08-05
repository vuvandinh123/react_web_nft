import { checkPropTypes } from "prop-types"
import { useState } from "react"

const Accordion = ({title,children,show}) => {
    const isActive = show || false
    const [active, setActive] = useState(isActive);
    return (
        <div className="mb-3 accordion">
            <div className="accordion__header d-between py-3" onClick={() => setActive(!active)}>
                <span className="text d-flex">
                    
                    {title}
                </span> <i style={{ transform: active ? 'rotate(180deg)' : "", transition: 'all .3s', color: '#ffae00' }} className="fa-solid fa-chevron-down"></i> </div>
            {
                active && (
                    <div className="accordion__body py-2">
                        {children ? children : <p className="text-center text-acc " style={{ fontWeight:"bold" }}>No Data</p>}
                    </div>
                )


            }
        </div>
    )
}
Accordion.propTypes = {
    title: checkPropTypes.string,
    children: checkPropTypes.node,
    show: checkPropTypes.bool
}
export default Accordion
