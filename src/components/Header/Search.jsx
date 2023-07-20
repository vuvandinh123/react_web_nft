// eslint-disable-next-line no-unused-vars
import React from 'react'
import avata1 from '../../assets/images/user/avata1.png';
import avata2 from '../../assets/images/user/avata2.png';
import avata3 from '../../assets/images/user/avata3.jpg';
import avata4 from '../../assets/images/user/avata4.png';
import avata5 from '../../assets/images/user/avata5.jpg';
import avata6 from '../../assets/images/user/avata6.jpg';
import avata7 from '../../assets/images/user/avata7.png';
import tich from '../../assets/images/user/tich.png';
const Search = () => {
  return (
    <div className="header__search">
      <form action="" method="post">
        <button><i className="fa-solid fa-magnifying-glass" /></button>
        <input id="s" autoComplete="off" type="text" defaultValue="" required placeholder="Search collection, item or user" />
        <label htmlFor="s" className="place">Search collection, item or user</label>
        <div className="header__search--collections">
          <p>Recommended Collections</p>
          <ul className='header__collections'>
            <li>
              <div className="header__avatar">
                <img src={avata2} alt="" />
              </div>
              <div className="header__name">
                <span> Fusionist - Bi·Mech</span>
              </div>
              <img src={tich} alt="" />
            </li>
            <li>
              <div className="header__avatar">
                <img src={avata3} alt="" />
              </div>
              <div className="header__name">
                <span>Alpha Prestige - Fusionist</span>
              </div>
              <img src={tich} alt="" />
            </li>
            <li>
              <div className="header__avatar">
                <img src={avata1} alt="" />
              </div>
              <div className="header__name">
                <span>Dream Girls NFT</span>
              </div>
            </li>
            <li>
              <div className="header__avatar">
                <img src={avata4} alt="" />
              </div>
              <div className="header__name">
                <span>The CR7 NFT Collection</span>
              </div>
            </li>
            <li>
              <div className="header__avatar">
                <img src={avata5} alt="" />
              </div>
              <div className="header__name">
                <span>ALPACADABRAZ</span>
              </div>
            </li>
            <li>
              <div className="header__avatar">
                <img src={avata6} alt="" />
              </div>
              <div className="header__name">
                <span>WonderfulDay Tiger NFT</span>
              </div>
            </li>
            <li>
              <div className="header__avatar">
                <img src={avata7} alt="" />
              </div>
              <div className="header__name"><span>TUD NFT</span></div>
            </li>
          </ul>
        </div>
      </form>
    </div>
  )
}

export default Search
