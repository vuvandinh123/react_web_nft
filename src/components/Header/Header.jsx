// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import './Header.scss';
import Search from './Search';
import SearchMobie from './SearchMobie';
const Header = () => {
    const [bars, setBars] = React.useState(false);
    const [search, setSearch] = React.useState(false);
    const [scroll, setScroll] = React.useState(false);
    const [darkmod,setDarkmod] = React.useState(false);
    useEffect(() => {
        if(localStorage.getItem('darkmod')) {
            document.body.classList.add('darkmod');
            setDarkmod(true);
        }
        else{
            document.body.classList.remove('darkmod');
        }
        const eventScroll = window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        })
        return ()=> window.removeEventListener('scroll', eventScroll)
    }, [])
    console.log(darkmod);
    const handleChangleDarkmode = () => {
        document.body.classList.toggle('darkmod');
        if (document.body.classList.contains('darkmod')) {
            localStorage.setItem('darkmod', "darkmod");
            setDarkmod(true);
        } else {
            setDarkmod(false);
            localStorage.removeItem('darkmod');
        }
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
                           ${bars ? 'active' : ''} 
                        `}>
                            <span id="close"
                                onClick={() => setBars(!bars)}
                                className="header__close"><i className="fa-solid fa-xmark" /></span>
                            <div className="header__logo">NFT VVD<span className="color-red">.</span></div>
                            <Search />
                            <div className="header__login--mb">
                                <div><a href="#">Login</a></div>
                                <div><a href="#">Register</a></div>
                            </div>
                            <div className="header__menu">
                                <ul>
                                    <li><a href="#">Explore</a></li>
                                    <li><a href="#">Create</a></li>
                                    <li><a href="#">Page</a></li>
                                </ul>
                            </div>
                            <div className="header__user">
                                <a href="#"><i className="fa-solid fa-user" /></a>
                            </div>
                            <div className="header__btn">
                                <a href="#">Connect Wallet</a>
                            </div>
                            <div className="switch">
                                {darkmod ? <i onClick={handleChangleDarkmode} className="fa-solid fa-sun" />
                                :   <i onClick={handleChangleDarkmode} className="fa-solid fa-moon" />
                            }
                            </div>
                        </div>
                        <div className="header__bars--mb ">
                            <div className="header__logo--mb">NFT VVD<span className="color-red">.</span></div>
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
