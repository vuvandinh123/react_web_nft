import { PropTypes } from "prop-types"
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"
import { styled } from "styled-components"

const StyledData = styled.div`
  .recharts-wrapper{
    width: 100% !important;
  }
`
const PriceHistory = ({data}) => {
    return (
        <StyledData>
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {/* <Legend /> */}
                <Line type="monotone" dataKey="pv" stroke="#82ca9d" activeDot={{ r: 8 }} />
            </LineChart>
        </StyledData>
    )
}
PriceHistory.propTypes = {
    data: PropTypes.array,
}
export default PriceHistory
