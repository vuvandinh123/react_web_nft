import { PropTypes } from "prop-types"
import { Link } from "react-router-dom"
import styled, { css } from 'styled-components'

const styledShare = css`
  background-color:${(props) => props.background || "#1e50ff"};
    width:${(props) => props.width || "200px"};
    height:${(props) => props.height || "40px"};
    font-size:${(props) => props.fontSize || "18px"};
    color:${(props) => props.color || "white"};;
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

const StyledLink = styled(Link)`
    ${styledShare}
`
const StyledButton = styled.button`
    ${styledShare}
`
const Button = (props) => {
  const {height, width, children,background,fontSize,tag,to,handleClickBtn,color} = props
    const subHandleClickBtn = ()=>{
      if(handleClickBtn) {
        handleClickBtn()
      }
    }
  return (
      tag === "a" ? 
      <StyledLink to={to} height={height} href="" width={width} color={color} fontSize={fontSize} background={background}>{children}</StyledLink> 
      : 
      <StyledButton onClick={subHandleClickBtn} height={height} color={color} width={width} fontSize={fontSize} background={background}>{children}</StyledButton>
  )
}
Button.propTypes = {
  tag: PropTypes.string,
  color: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  background:PropTypes.string,
  fontSize: PropTypes.string,
  handleClickBtn:PropTypes.func,
}
export default Button
