import React from 'react'
import { features } from '../shared/Images'
import FeaturedProduct from './FeaturedProduct'
import NewsLatter from './NewsLatter'
import NewArrivals from './NewArrivals';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>

            <section id="hero">
                <h4>Trade-in-offer</h4>
                <h2>Super value Deals</h2>
                <h1>On all products</h1>
                <p>save more with coupons & up to 70% off!</p>
                <button>Shop Now</button>
            </section>

            <section id="feature" className="section-p1">
                {
                    features.map((item) => {
                        return (
                            <div className="fe-box" key={item.id}>
                                <img src={item.IMG_URL} alt={item.title} />
                                <h6>{item.title}</h6>
                            </div>
                        )
                    })
                }
            </section>

            <FeaturedProduct />

            <section id="banner" className="section-m1">
                <h4>Repair Services</h4>
                <h2>Up to <span>70% Off</span> - All t-Shirt & Accessories</h2>
                <button className="normal">Explore more</button>
            </section>

            <NewArrivals />

            <section id="sm_banner" className="section-p1">
                <div className="banner_box">
                    <h4>crazy Deals</h4>
                    <h2>buy 1 get 1 free</h2>
                    <span>The best classNameic dress is on sale at care</span>
                    <Link to={'/new-arrivals'} className="white">Learn More</Link>
                </div>

                <div className="banner_box banner_box2">
                    <h4>Spring/Summer</h4>
                    <h2>Upcoming Season</h2>
                    <span>The best classNameic dress is on sale at care</span>
                    <Link to={'/new-arrivals'} className="white">Collection</Link>
                </div>
            </section>

            {/* <!-- Banner-3 Section --> */}
            <section id="banner_3" className="section-p1">
                <div className="banner_box">
                    <h2>SEASONAL SALE</h2>
                    <h3>Winter Collection -50% OFF</h3>
                </div>
                <div className="banner_box banner_box2">
                    <h2>NEW FOOTWEAR COLLECTION</h2>
                    <h3>Spring/Summer 2022</h3>
                </div>
                <div className="banner_box banner_box3">
                    <h2>JACKETS</h2>
                    <h3>New trendy Jackets</h3>
                </div>
            </section>

            <NewsLatter />
        </>
    )
}

export default Home