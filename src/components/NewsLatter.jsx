import React from 'react'

const NewsLatter = () => {
    return (
        <section id="newsletter" className="section-p1 section-m1">
            <div className="newstext">
                <h4>Sign Up for Newsletters</h4>
                <p>Get E-mail updates about our latest shop and <span>Special Offers.</span></p>
            </div>
            <div className="form">
                <input type="text" placeholder="Your email Address" />
                <button className="normal">Sign Up</button>
            </div>
        </section>
    )
}

export default NewsLatter