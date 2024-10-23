import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
    const { pro_IMG, title, desc, rating, price, id } = props.data;
    return (
        <div className="pro">
            <Link to={'/product-details/' + id}> <img src={pro_IMG} alt="products" /> </Link>
            <div className="des">
                <span>{title}</span>
                <h5> <Link to={'/product-details/' + id}> {desc} </Link></h5>
                <div className="star">
                    Rating ({rating})
                    <i className="fas fa-star"></i>
                </div>
                <h4>{price}</h4>
            </div>
            <button className='cart-btn'><i className="fas fa-shopping-cart add_cart"></i></button>
        </div>
    )
}

export default Card