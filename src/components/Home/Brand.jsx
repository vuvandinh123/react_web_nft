import styled from "styled-components"
import image1 from "../../assets/images/brand/coin.png"
import image2 from "../../assets/images/brand/crypto.png"
import image3 from "../../assets/images/brand/valley.png"
import image4 from "../../assets/images/brand/Vector.png"
const StyledBrand = styled.div`
  overflow: hidden;
  height: 300px;
  .brand {
    height: 143px;
    margin-top: 100px;
    background-color: yellow;
    .brand-content {
      margin-left: -10px;
      display: flex;
      align-items: center;
      background-color: #1e50ff;
      width: 102%;
      height: 143px;
      transform: rotate(1deg);
      .logo-brand {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 20px;
        .logo-img-item > * {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`
const Brand = () => {
    return (
        <StyledBrand>
            <div className="brand">
                <div className="brand-content">
                    <div className="container">
                        <div className="logo-brand">
                            <div className="logo-img-item">
                                <img src={image1} alt="" />
                            </div>
                            <div className="logo-img-item">
                                <img src={image2} alt="" />
                            </div>
                            <div className="logo-img-item">
                                <img src={image3} alt="" />
                            </div>
                            <div className="logo-img-item">
                                <img src={image4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledBrand>
    )
}

export default Brand
