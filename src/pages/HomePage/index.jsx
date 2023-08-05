import { Artist, CategoryHome, Collections, TopCollections, Trending } from "../../components/Home"
import community from '../../../public/join.png'
import start from '../../../public/start.png'
import start2 from '../../../public/Start.svg'
import { Button } from "../../components/Gloabal"
import { useDocumentTitle, useScrollTop } from "../../hooks"
import image from "../../assets"
import { useTranslation } from "react-i18next"
const HomePage = () => {
  useDocumentTitle("VVD | Home");

    useScrollTop();
    const {t} =  useTranslation()
    return (
        <>
            <section className="container main__home ">
                <div className="main__content col-2 gap-y-m col-md-1 mb-3">
                    <div className="main__title ">
                        <p className="">{t('title1')}</p>
                        <div >
                            <img className="title-image" src={image.image1} alt="" />{t('title2')}
                        </div>
                        <p className="">
                            {t('title3')} <span className="text-yellow"> NFTs </span><img className="d-inline" src={image.image2} alt="" />
                        </p>
                    </div>
                    <div className="main__text mt-2 ">
                        <p className="mb-2">
                            {t('text_content')}
                        </p>
                        <Button background="#1e50ff" width="200px" height="40px">{t('btn_nft')}</Button>
                    </div>
                </div>


                <div className="main__star ">
                    <img src={start2} alt="" />

                </div>
                <div className="main__image ">
                    <div className="image__item">
                        <img src={image.image3} alt="" />
                    </div>
                    <div className="image__item">
                        <img src={image.image4} alt="" />
                    </div>
                    <div className="image__item">
                        <img src={image.image5} alt="" />
                    </div>
                </div>
            </section>
            <div className="brand__home">
                <div className="brand">
                    <div className="brand-content">
                        <div className="container">
                            <div className="logo-brand">
                                <div className="logo-img-item">
                                    <img src={image.image6} alt="" />
                                </div>
                                <div className="logo-img-item">
                                    <img src={image.image7} alt="" />
                                </div>
                                <div className="logo-img-item">
                                    <img src={image.image7} alt="" />
                                </div>
                                <div className="logo-img-item">
                                    <img src={image.image9} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="container" >
                    <Trending />
                    <Collections />
                    <CategoryHome />
                    <TopCollections />
                    <Artist />
                    <div className="works relative">
                        <div className="work-title">
                            <h3>How it Work</h3>
                        </div>
                        <div className="list-card-work d-between">
                            <div className="card-work-item">
                                <div className="item-image"><img src={image.work1} alt="" /></div>
                                <div className="item-title">Set up your wallet</div>
                                <p>Once you’ve set up your wallet of choice, connect it to our platform by clicking the wallet icon.</p>
                            </div>
                            <div className="card-work-item">
                                <div className="item-image"><img src={image.work2} alt="" /></div>
                                <div className="item-title">Set up your wallet</div>
                                <p>Once you’ve set up your wallet of choice, connect it to our platform by clicking the wallet icon.</p>
                            </div>
                            <div className="card-work-item">
                                <div className="item-image"><img src={image.work3} alt="" /></div>
                                <div className="item-title">Set up your wallet</div>
                                <p>Once you’ve set up your wallet of choice, connect it to our platform by clicking the wallet icon.</p>
                            </div>
                        </div>
                    </div>
                    <div className="community">
                        <div className="image d-center"><img src={community} alt="" /></div>
                        <div className="content">
                            <h3>Join our community</h3>
                            <p>Discover, collect, and sell extraordinary NFTs through our awesome platform.</p>
                            <div className="d-center"><Button type="a" height="50px">Get Stated</Button></div>
                        </div>
                        <div className="bg-community">
                            <img src={start} alt="" />
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default HomePage
