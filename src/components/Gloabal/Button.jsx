import { PropTypes } from "prop-types"
import styled from 'styled-components'
const StyledButton = styled.a`
    background-color:${(props) => props.background || "#1e50ff"};
    width:${(props) => props.width || "200px"};
    height:${(props) => props.height || "40px"};
    font-size:18px;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;    
    border-radius: 5px;
    position: relative;
    overflow: hidden;
  &::before {
    content: "";
    left: 0;
    top: 0;
    width: 0px;
    transform: rotate(10deg);
    height: 100%;
    position: absolute;
    background-color: #ffffffb9;
    display: block;
    z-index: 99;
    transition: 0.4s;
  }
  &:hover::before {
    width: 50px;
    left: 110%;
  }
`
const Button = (props) => {
  const {height, width, children,background} = props
  return (
    <StyledButton height={height} href="" width={width} background={background}>{children}</StyledButton>
  )
}
Button.propTypes = {
  children: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  background:PropTypes.string
}
export default Button
