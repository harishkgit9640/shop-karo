import React from 'react'
import FeaturedProduct from './FeaturedProduct';
import NewsLatter from './NewsLatter';
import aboutImg from '../assets/img/about/a6.jpg'
import aboutVideo from '../assets/img/about/1.mp4'
const About = () => {
    return (
        <>
            <section id="page_header" className="about_header">
                <h2>#Know Us</h2>
                <p>Read All About our Company or Products </p>
            </section>

            <section id="about_head" className="section-p1">
                <img src={aboutImg} alt="about_img" />
                <div>
                    <h2>Who we are?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos doloremque sint distinctio deserunt
                        voluptatem molestiae aliquid quo accusantium fugiat at obcaecati omnis harum molestias repellat
                        repellendus quam ipsa numquam laborum, consectetur ad!</p>
                    <abbr title="">voluptatem molestiae aliquid quo accusantium fugiat at obcaecati omnis harum molestias
                        repellat
                        repellendus quam ipsa numquam laborum, consectetur</abbr>
                    <br /><br />
                    <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, aspernatur. Architecto exercitationem,
                        harum officia beatae ducimus, ut aperiam placeat labore voluptates accusantium vel veniam quos
                        praesentium eligendi illum ipsum alias adipisci fuga.
                    </marquee>
                </div>
            </section>

            <section id="about_app" className="section-p1">
                <h1>Download Our <a href="#">App</a></h1>
                <div className="video">
                    <video width="750" height="500" controls >
                        <source src={aboutVideo} type="video/mp4" />
                    </video>
                </div>
            </section>
            <FeaturedProduct />
            <NewsLatter />
        </>
    )
}

export default About