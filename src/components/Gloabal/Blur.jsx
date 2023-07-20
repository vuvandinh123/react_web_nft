/* eslint-disable react/no-unknown-property */
import { PropTypes } from "prop-types";
import styled from "styled-components"

const StyledBlur = styled.div`
    overflow: hidden;
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
`
const StyledBlurItem = styled.div`
    width: ${(props) => props.width || "200px"};
    height: ${(props) => props.height || "200px"};
    position: absolute;
    filter: blur(165px);
    border-radius: 50%;
    background: ${(props) => props.background || "#aa00ff"};
    left: ${(props) => props.left || "0"};
    top: ${(props) => props.top || "100px"};
`
const Blur = (props) => {
    const { top,left, background,width,height } = props;

    return (
        <StyledBlur>
                <StyledBlurItem top={top} width={width} height={height} left={left} background={background}  ></StyledBlurItem>
        </StyledBlur>
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
