import { Blur } from "../Gloabal"

const Footer = () => {
    return (
        <footer className="relative">
            <Blur width="100px" height="200px" />
            <Blur top="50%" left="50%"  width="150px" height="100px" background="#ffe562" />
            <Blur top="50%" left="90%" width="100px" height="200px" background="#ff62b8" />
            <div className="container">

                <div className="footer">
                    <div className="footer__left">
                        <div className="market">
                            <ul>
                                <h5>Marketplace</h5>
                                <li><a href="#">Explore</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">How it works</a></li>
                                <li><a href="#">Jobs</a></li>
                                <li><a href="#">Help center</a></li>
                            </ul>
                        </div>
                        <div className="market">
                            <ul>
                                <h5>Marketplace</h5>
                                <li><a href="#">Explore</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">How it works</a></li>
                                <li><a href="#">Jobs</a></li>
                                <li><a href="#">Help center</a></li>
                            </ul>
                        </div>
                        <div className="acc">
                            <ul>
                                <h5>My Account</h5>
                                <li><a href="#">Profile</a></li>
                                <li><a href="#">Favorites</a></li>
                                <li><a href="#">Watchlist</a></li>
                                <li><a href="#">My Collections</a></li>
                            </ul>
                        </div>
                        <div className="company">
                            <ul>
                                <h5>My Account</h5>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Ventures</a></li>
                                <li><a href="#">Grants</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__right">
                        <h5>Stay in the loop</h5>
                        <form action="#" method="post">
                            <input type="email" required placeholder="email address" />
                            <button>Subscribe</button>
                        </form>
                        <div className="contact">
                            <div className="email">
                                <p>Email Us</p>
                                <p>vuvandinh203@gmail.com</p>
                            </div>
                            <div className="phone">
                                <p>Call Us</p>
                                <p>0333583800</p>
                            </div>
                        </div>
                        <p>Copyright © 2022 VVD all rights reserved.</p>
                    </div>
                </div>
                <div className="footer__bottom d-between">
                    <div className="left">
                        <ul>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Security</a></li>
                            <li><a href="#">Terms &amp; Condition</a></li>
                        </ul>
                    </div>
                    <div className="right d-flex">
                        <span className="d-center"><i className="fa-brands fa-facebook-f" /></span>
                        <span className="d-center"><i className="fa-brands fa-instagram" /></span>
                        <span className="d-center"><i className="fa-brands fa-twitter" /></span>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
