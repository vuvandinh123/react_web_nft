import "./Content.scss"
import image1 from "../../assets/images/Banner/title1.png"
import image2 from "../../assets/images/Banner/title2.png"
import image3 from "../../assets/images/Banner/image1.png"
import image4 from "../../assets/images/Banner/image2.png"
import image5 from "../../assets/images/Banner/image3.png"
import Button from "../Gloabal/Button"
import Blur from "../Gloabal/Blur"
const Content = () => {
    return (
        <>
            <Blur />
            <Blur top="200px" left="50%" width="100px" height="100px" />
            <Blur top="500px" left="0"  background="#1e50ff" />
            <Blur top="200px" left="90%" background="#FFC935" />
            <Blur top="30%" left="40%" width="350px" height="250px" background="#ffae00" />
            <section className="container content">
                <div className="content__home">
                    <div className="home__title">
                        <p className="animationTop">Buy, Sell, And</p>
                        <div className="animationTop delay-01">
                            <img src={image1} alt="" />Showcase
                        </div>
                        <p className="animationTop delay-02">
                            Super <span className="color-red"> NFTs </span><img src={image2} alt="" />
                        </p>
                    </div>
                    <div className="home__text animationLeft">
                        <p>
                            Discover, collect, and sell extraordinary NFTs through our awesome
                            platform. Express yourself by your artwork though us. Lorem ipsum
                            dolor sit, amet consectetur adipisicing elit. Quidem omnis fuga quod
                            magnam architecto sed debitis ratione earum aspernatur eligendi!
                        </p>
                        <Button background="#1e50ff" width="200px" height="40px">Explore NFTs</Button>
                    </div>
                </div>
                

                <div className="content__star">
                    <svg width="726" height="541" viewBox="0 0 726 541" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M253 0.326782L254.782 10.3543L265 12.103L254.782 13.8517L253 23.8793L251.218 13.8517L241 12.103L251.218 10.3543L253 0.326782Z" fill="#1E50FF" />
                        <path d="M714 173.045L715.782 183.073L726 184.821L715.782 186.57L714 196.598L712.218 186.57L702 184.821L712.218 183.073L714 173.045Z" fill="#FFC935" />
                        <path d="M285 238.796L286.782 248.823L297 250.572L286.782 252.321L285 262.348L283.218 252.321L273 250.572L283.218 248.823L285 238.796Z" fill="#AA00FF" />
                        <path d="M12 516.519L13.7819 526.547L24 528.295L13.7819 530.044L12 540.072L10.2181 530.044L0 528.295L10.2181 526.547L12 516.519Z" fill="#AA00FF" />
                        <path d="M312 516.519L313.782 526.547L324 528.295L313.782 530.044L312 540.072L310.218 530.044L300 528.295L310.218 526.547L312 516.519Z" fill="#FFC935" />
                    </svg>

                </div>
                <div className="content__image">
                    <div className="image__item animationTop">
                        <img src={image3} alt="" />
                    </div>
                    <div className="image__item animationTop">
                        <img src={image4} alt="" />
                    </div>
                    <div className="image__item animationTop">
                        <img src={image5} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Content
