/* eslint-disable react/no-unknown-property */
import { PropTypes } from "prop-types";
import styled from "styled-components"

const StyledBlurItem = styled.div`
    width: ${(props) => props.width || "20%"};
    height: ${(props) => props.height || "5%"};
    position: absolute;
    z-index:-99;
    filter: blur(165px);
    border-radius: 50%;
    background: ${(props) => props.background || "#aa00ff"};
    left: ${(props) => props.left || "0"};
    top: ${(props) => props.top || "100px"};
`
const Blur = (props) => {
    const { top, left, background, width, height } = props;
    return (
        <StyledBlurItem top={top} width={width} height={height} left={left} background={background}  ></StyledBlurItem>
    )
}
Blur.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    top: PropTypes.string,
    left: PropTypes.string,
    background: PropTypes.string
}
export default Blur
