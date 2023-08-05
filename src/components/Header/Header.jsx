// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import Search from './Search';
import SearchMobie from './SearchMobie';
import { Link } from 'react-router-dom';
import i18n from '../../language/LanguageSetting';
const Header = () => {
    const [bars, setBars] = React.useState(false);
    const [search, setSearch] = React.useState(false);
    const [scroll, setScroll] = React.useState(false);
    const [darkmod, setDarkmod] = React.useState(false);
    const [model, setModel] = React.useState(false);
    const [lang, setLang] = React.useState("en");
    const handleChangleLang = (e) => {
        i18n.changeLanguage(e.target.value || 'en');
        setLang(e.target.value);
        localStorage.setItem('language', e.target.value);
    }
    useEffect(() => {
        if (localStorage.getItem('language')) {
            i18n.changeLanguage(localStorage.getItem('language') || 'en');
        }
    })

    useEffect(() => {
        if (localStorage.getItem('darkmode')) {
            document.body.classList.add('darkmode');
            setDarkmod(true);
        }
        else {
            document.body.classList.remove('darkmode');
        }
        const eventScroll = window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        })
        return () => window.removeEventListener('scroll', eventScroll)
    }, [])
    const handleChangleDarkmode = () => {
        document.body.classList.toggle('darkmode');
        if (document.body.classList.contains('darkmode')) {
            localStorage.setItem('darkmode', "darkmode");
            setDarkmod(true);
        } else {
            setDarkmod(false);
            localStorage.removeItem('darkmode');
        }
    }
    const handleChangleModel = () => {
        setLang(i18n.language);
        setModel(true);
    }
    const handleClickCloseSearch = () => {
        setSearch(false);
    }
    return (
        <>
            <header>
                <div className="container">
                    <div className={`header ${scroll ? 'sticky' : ''}`}>
                        <div id="nav" className={`header__navigation 
                            d-between
                           ${bars ? 'active' : ''} 
                        `}>
                            <span id="close"
                                onClick={() => setBars(!bars)}
                                className="header__close"><i className="fa-solid fa-xmark" /></span>
                            <div className="header__logo d-center"><Link className='text' to="/">NFT VVD</Link> <span className="text-yellow">.</span></div>
                            <Search />
                            <div className="header__login--mb">
                                <div><a href="#">Login</a></div>
                                <div><a href="#">Register</a></div>
                            </div>
                            <div className="header__menu d-center">
                                <ul className=''>
                                    <li><a href="#">Explore</a></li>
                                    <li><a href="#">Create</a></li>
                                    <li><a href="#">Page</a></li>
                                </ul>
                            </div>
                            <div className="header__user d-center">
                                <a href="#" className='d-center'><i className="fa-solid fa-user" /></a>
                            </div>
                            <div className="header__btn d-center">
                                <a className='d-center' href="#">Connect Wallet</a>
                            </div>
                            <div >
                                <i onClick={handleChangleModel} className="fa-solid fa-earth-americas" style={{ cursor: 'pointer' }}></i>
                                {
                                    model && (
                                        <div className='header__language'>
                                            <div className="lang__header d-between p-3">
                                                <h6><i className="fa-solid fa-earth-americas me-2"></i> Language</h6>
                                                <span style={{ cursor: 'pointer', fontSize: '1.8rem' }} onClick={() => setModel(false)} className="text-yellow p-1"><i className="fa-solid fa-xmark"></i></span>
                                            </div>
                                            <div className="lang__body">
                                                <p className='py-2 text-acc'>

                                                    Choose a language and region</p>
                                                <div className="d-flex" style={{ flexWrap: "wrap" }}>
                                                    <div className='lang__item'>
                                                        <input
                                                            checked={lang === 'en'}
                                                            onChange={handleChangleLang} type="radio" value="en" id='en' name='lang' />
                                                        <label htmlFor="en">English</label>
                                                    </div>
                                                    <div className='lang__item'>
                                                        <input onChange={handleChangleLang}
                                                            checked={lang === 'vi'}
                                                            type="radio" value="vi" id='vi' name='lang' />
                                                        <label htmlFor="vi">Việt Nam</label>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="switch d-center">
                                {darkmod ? <i onClick={handleChangleDarkmode} className="fa-solid fa-sun" />
                                    : <i onClick={handleChangleDarkmode} className="fa-solid fa-moon" />
                                }
                            </div>
                        </div>
                        <div className="header__bars--mb ">
                            <div className="header__logo--mb">NFT VVD<span className="text-yellow">.</span></div>
                            <div className="bars__right--mb">
                                <div className="bars__search--mb">
                                    <i id="search" onClick={() => setSearch(true)} className="fa-solid fa-magnifying-glass" />
                                    <SearchMobie handleClickCloseSearch={handleClickCloseSearch} search={search} />
                                </div>
                                <button id="bars" onClick={() => setBars(!bars)} >
                                    <i className="fa-solid fa-bars" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
