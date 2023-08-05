import card from "../../assets/images/products/card1.png";
import { Button } from "../Gloabal";
import { useCountDown } from "../../hooks";

const Trending = () => {

  const timeCountDown = new Date("2023-10-28T12:00:00").getTime();
  const { time } = useCountDown("days", timeCountDown);
  return (
    <>

      <div className="trending relative col-2 col-sm-1 gap-y-4">

        <div className="trending__image">
          <img src={card} alt="" />
        </div>
        <div className="trending__content">
          <h2>JUNK FOOD PARTY #137</h2>
          <p>Created by <span> MitsuoKatori</span></p>
          <div className="time__sale" >
            <div className="time__sale--item">
              <span className="days">{time.days}</span>
              <p>DAYS</p>
            </div>
            <div className="time__sale--item">
              <span className="hours">{time.hours}</span>
              <p>HRS</p>
            </div>
            <div className="time__sale--item">
              <span className="minutes">{time.minutes}</span>
              <p>MINS</p>
            </div>
            <div className="time__sale--item">
              <span className="seconds">{time.seconds}</span>
              <p>SECS</p>
            </div>
          </div>
          <p className="trending__bid">Current Bid</p>
          <h3>1.0324 ETH</h3>
          <div className="trending__btn">
            <Button height="50px" width="150px" background="#1e50ff">Place a Bid</Button>
            <Button height="50px" background="#131528" width="150px">View Artwork</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Trending
