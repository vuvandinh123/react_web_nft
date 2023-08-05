import avata2 from '../../assets/images/user/avata2.png';
import tich from '../../assets/images/user/tich.png';
import fire from '../../../public/lua.png';
import { useTranslation } from 'react-i18next';
import { useSearch } from '../../hooks';
const Search = () => {
  const { t } = useTranslation()
  const {handleSubmitSearch,handleChangeSearch,searchInputRef,value,products,user} = useSearch();
  return (
    <div className="header__search ">
      <form action="" onSubmit={handleSubmitSearch} className='mt-1' method="post">
        <button className='' type='submit' ><i style={{ marginTop: "12px" }} className="fa-solid fa-magnifying-glass" /></button>
        <input id="s" ref={searchInputRef} onChange={handleChangeSearch} autoComplete="off" type="text" defaultValue="" required placeholder="Search collection, item or user" />
        <label htmlFor="s" className="place mt-1">{t('search_placeholder')}</label>
        <div className="header__search--collections">
          {
            value != '' ?
              <>
                <div>
                  {
                    products.length > 0 ?
                      <>
                        <p style={{ padding: "10px 0px" }}>Collections </p>
                        <ul className='header__collections'>
                          {
                            products.map((item, index) => {
                              if (index < 8) {
                                return (
                                  <li key={item.id}>
                                    <div className="header__avatar">
                                      <img src={item.image} alt="" />
                                    </div>
                                    <div className="header__name">
                                      <span>{item.name}</span>
                                    </div>
                                  </li>
                                )
                              }
                            })
                          }
                        </ul>
                      </>
                      :
                      <div></div>
                  }
                </div>
                <div>
                  {
                    user.length > 0 ?
                      <>
                        <p style={{ padding: "10px 0px" }}>User </p>
                        <ul className='header__collections'>
                          {
                            user.map((item, index) => {
                              if (index < 8) {
                                return (
                                  <li key={item.id} className='d-between'>
                                    <div className='d-flex' style={{ gap: "10px", alignItems: "center" }}>
                                      <div className="header__avatar">
                                        <img src={avata2} alt="" />
                                      </div>
                                      <div className="header__name">
                                        <span>{item.name}</span>
                                      </div>
                                      {item.rose === 1 ? <img src={tich} alt="" /> : ""}
                                    </div>
                                    <div className='' style={{ fontSize: "1.4rem" }}>{item.followers} Followers</div>
                                  </li>
                                )
                              }
                            })
                          }


                        </ul>
                      </>
                      :
                      <div></div>
                  }

                </div>
              </>
              :
              <div>
                {
                  products.length > 0 ?
                    <>
                      <p style={{ padding: "10px 0px" }}>Recommended Collections  <img style={{ width: "10px" }} className='d-inline' src={fire} alt="" /></p>
                      <ul className='header__collections'>
                        {
                          products.map((item, index) => {
                            if (index < 16) {
                              return (
                                <li key={item.id} className='d-between'>
                                  <div className='d-flex' style={{ gap: "10px", alignItems: "center" }}>
                                    <div className="header__avatar">
                                      <img src={item.image} alt="" />
                                    </div>
                                    <div className="header__name">
                                      <span>{item.name}</span>
                                    </div>
                                    {item.rose === 1 ? <img src={tich} alt="" /> : ""}
                                  </div>
                                </li>
                              )
                            }
                          })
                        }
                      </ul>
                    </>
                    :
                    <div></div>
                }
              </div>
          }
        </div>
      </form>
    </div>
  )
}

export default Search
