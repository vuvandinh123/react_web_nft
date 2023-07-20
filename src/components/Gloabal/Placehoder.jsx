import { styled } from "styled-components"

const StyledPlacehoder = styled.div`
  position: relative;
  background-color: var(--card);
  padding: 20px;
  color: #fff;
  border-radius: 10px;
  max-height: 582px;
  .placehoder{

    &__image{
        background: linear-gradient(90deg, #4c4c4c, #828282);
	    background-size: 400% 400%;
	    animation: gradient 3s ease infinite;
        height: 400px;
        margin-bottom: 10px;
    }
    &__content{
        
    }
    &__item:nth-child(1){
        background: linear-gradient(90deg, #565656, #bebebe);
        background-size: 400% 400%;
	    animation: gradient 3s linear infinite;
        width: 60%;
        height: 20px;
        background-color:#ccc;
        margin-bottom:10px;
    }
    &__item:nth-child(2){
        background: linear-gradient(90deg, #565656, #bebebe);
        background-size: 400% 400%;
	    animation: gradient 3s linear infinite;
        width: 20%;
        height: 20px;
        background-color:#ccc;
        margin-bottom:10px;
    }
    &__item:nth-child(3){
        background: linear-gradient(90deg, #565656, #bebebe);
        background-size: 400% 400%;
	    animation: gradient 3s linear infinite;
        width: 60%;
        height: 20px;
        background-color:#ccc;
        margin-bottom:10px;
    }
  }
  @keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
`
const Placehoder = () => {
    return (
        <StyledPlacehoder>
            <div className="placehoder">
                <div className="placehoder__image">

                </div>
                <div className="placehoder__content">
                    <div className="placehoder__item"></div>
                    <div className="placehoder__item"></div>
                    <div className="placehoder__item"></div>
                </div>
            </div>
        </StyledPlacehoder>
    )
}

export default Placehoder
