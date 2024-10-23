import React from 'react'
// import BRAND_LOGO from '../assets/img/logo.png';
import appStore from '../assets/img/pay/app.jpg';
import playStore from '../assets/img/pay/play.jpg';
import paymentMethod from '../assets/img/pay/pay.png';
const Footer = () => {
    return (

        <section id="footer" className="section-p1">
            <div className="col">
                {/* <img src={BRAND_LOGO} alt="footer_logo" className="logo" /> */}
                <h4>Contact</h4>
                <p><strong>Address:</strong> Nilgiri block 4th floor, Ameerpet Hyderabad </p>
                <p><strong>Phone:</strong> +91 9977 444 / 9977 555 </p>
                <p><strong>Hours:</strong> 10: 00 - 06:00, Mon - Sat</p>
                <div className="follow">
                    <h4>follow Us</h4>
                    <div className="icons">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-youtube"></i>
                    </div>
                </div>
            </div>
            <div className="col">
                <h4>About</h4>
                <a href="#">About</a>
                <a href="#">Deliver Information</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Term & Conditions</a>
                <a href="#">Contact Us</a>
            </div>
            <div className="col">
                <h4>My Account</h4>
                <a href="#">Sign Up</a>
                <a href="#">View Cart</a>
                <a href="#">My Wishlist</a>
                <a href="#">Track My Order</a>
                <a href="#">Help & Support</a>
            </div>

            <div className="col install">
                <h4>Install App</h4>
                <p>From App Store or Google Play Store</p>
                <div className="row">
                    <img src={appStore} alt="apple-app" />
                    <img src={playStore} alt="android-app" />
                </div>
                <p>Secured Payment Gateways</p>
                <img src={paymentMethod} alt="payment-methods" />
            </div>

            <div className="copyright">
                <p> &copy; Copyright {new Date().getFullYear()} All Rights Reserved || <strong>HK Solution</strong> </p>
            </div>
        </section>
    )
}

export default Footer