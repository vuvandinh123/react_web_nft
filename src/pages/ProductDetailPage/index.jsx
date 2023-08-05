import { useEffect, useState } from 'react';
import { ProductApi } from '../../api/ProductApi';
import { useParams } from 'react-router';
import { Accordion, Blur, Button, ImageLoader } from '../../components/Gloabal';
import { useCountDown, useDocumentTitle, useScrollTop } from '../../hooks';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Detail, PriceHistory } from '../../components';
const ProductDetailPage = () => {
  const data = [
    {
      name: 'month 1',
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'month 2',
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'month 3',
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Month 4',
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Month 5',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    }
  ];
  const timeCountDown = new Date("2023-08-28T12:00:00").getTime();
  const { time } = useCountDown("days", timeCountDown);
  const [loading, setLoading] = useState(true);
  useScrollTop();
  const { id } = useParams();
  useEffect(() => {
    const loader = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(loader);
  }, [])
  const productDetail = ProductApi.find((item) => item.id == id);
  useDocumentTitle("VVD | "+ productDetail.name);

  return (
    <>
      <div id="loading" className={`loaders ${loading == true ? 'active' : ''}`}>
        <div className="spinner"></div>
      </div>

      <Blur top="10%" left="30%" width="100px" height="100px" background="#ff20fb" />
      <Blur top="30%" left="20%" width="200px" height="200px" background="#ff0000" />
      <Blur top="50%" left="90%" width="300px" height="200px" background="#a805ff" />
      <Blur top="10%" left="70%" width="200px" height="200px" background="#a805ff" />
      <div style={{ overflow: "hidden", width: "100%" }} className='relative'>
        <div className="container">
          <div className="product__detail">
            <div className="detail__left">
              <div style={{ borderRadius: "15px", overflow: "hidden",width: "100%" }} className="image d-center">
                <ImageLoader src={productDetail.image} />
              </div>
            </div>
            <div className="detail__right">
              <div className="user">
                <div className="user__name">
                  <p>
                    {loading ?
                      <Skeleton baseColor='#cfcfcfdc' className='d-inline' width="180px" height="20px" />
                      : <>
                        <span className='me-1'>vu van dinh</span>
                        <img className='d-inline' src="/public/tich.png" alt="" />
                      </>
                    }
                  </p></div>
                <div className="user__right">
                  <div className="user__heard"><i className="fa-regular fa-heart"></i></div>
                  <div className="user__share"><i className="fa-solid fa-share-nodes"></i></div>
                  <div className="user__report"><i className="fa-solid fa-exclamation"></i></div>
                </div>
              </div>
              <div className="name__product">{productDetail.name || <Skeleton width="350px" height="28px" />}</div>
              <div>
                {loading ?
                  <Skeleton className='d-inline' width="150px" height="25px" />
                  :
                  <><span className="top">6198</span><span className='type'>Listed From</span></>
                }
              </div>

              <div className="price">
                <div className="price__title"><span>Price</span><span>Ends in</span></div>
                <div className="price__eth">
                  <div className='py-1'>
                    {productDetail.price ? <span className='d-flex'>{productDetail.price} ETH </span> : <Skeleton width="300px" height="25px" />}
                  </div>

                  {
                    !loading ?
                      <div className="sale">
                        <span><span className='time text me-1'> {time.days} </span>Days</span>
                        <span><span className='time text me-1'> {time.hours} </span> Hours</span>
                        <span><span className='time text me-1'> {time.minutes} </span> Mins</span>
                        <span><span className='time text me-1'> {time.seconds} </span>Secs</span>
                      </div>
                      :
                      <Skeleton width="200px" height="25px" />
                  }

                </div>
                {
                  !loading ?
                    <p className='mt-2'><span><i className="fa-solid fa-arrow-up-right-dots"></i>10%</span> above the floor price 10.87 ETH</p>
                    :
                    <Skeleton className='mt-1' width="200px" height="25px" />
                }
              </div>
              <div className="buy">
                {
                  loading ? <Skeleton width="100px" borderRadius={"10px"} height="50px" /> :
                    <Button width="200px" height="50px" background="#ffcd62" color="#000">Buy Now</Button>

                }
              </div>

              <div className="dec">
                {
                  loading ? <Skeleton width="500px" count={3} borderRadius={"10px"} height="10px" /> :
                    <div>
                      <p>This NFT is a third-party listing:</p>
                      <ul style={{ lineHeight: 2, }}>
                        <li> To complete the transaction, you will need to pay a gas fee and wait for the blockchain confirmation which normally takes around 10 minutes; and</li>
                        <li>You are responsible for verifying the identity, legitimacy, and authenticity of this NFT.</li>
                      </ul>
                    </div>

                }
              </div>
            </div>
            <div className="detail__left">
              <div className="">
                <Accordion show={true} title="Detail">
                  <Detail/>
                </Accordion>
                <Accordion show={true} title="Description">
                  <p className='text-acc' style={{ lineHeight: "2" }}>
                    A Stone statue of Ronaldo performing his legendary stepover.
                    Quantity and color: 777,777 in Stone color.
                  </p>
                </Accordion>
              </div>
            </div>
            <div className="detail__right">
              <Accordion show={true} title="Offers"></Accordion>
              <Accordion show={true} title="Price History">
                <PriceHistory data={data} />
              </Accordion>
              <Accordion title="Activity"></Accordion>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ProductDetailPage
