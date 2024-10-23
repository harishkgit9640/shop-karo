import React, { useState } from 'react'
import Img1 from '../assets/img/products/f1.jpg'
import Img2 from '../assets/img/products/f2.jpg'
import Img3 from '../assets/img/products/f3.jpg'
import Img4 from '../assets/img/products/f4.jpg'
import NewsLatter from './NewsLatter'
import FeaturedProduct from './FeaturedProduct'
const ProductDetails = () => {

    const ProductImages = [Img1, Img2, Img3, Img4]
    const [image, setImage] = useState(Img1);

    return (
        <>
            <section id="pro_details" className="section-p1">
                <div className="single_pro_img">
                    <img src={image} width="100%" id="pro_img" alt="proImg" />
                    <div className="small_img_group">
                        {
                            ProductImages.map((pro, index) => {
                                return (
                                    <div className="small_img_col" key={index}>
                                        <img src={pro} onClick={() => setImage(pro)} width="100%" className="small_img" alt={pro} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="single_pro_details">
                    <h6>Home/ T-shirt</h6>
                    <h4>men's Fashion T-shirt</h4>
                    <h2>$139.00</h2>
                    <select name="size" id="pro_size">
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                        <option value="Small">Small</option>
                        <option value="Large">Large</option>
                    </select>
                    <input type="number" value="1" />
                    <button className="normal">Add To Cart</button>
                    <h4>Product Details</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vero ea autem magnam commodi a beatae
                        aperiam esse culpa error! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempora
                        tempore, temporibus magnam totam atque veniam neque itaque at obcaecati fugiat incidunt corrupti
                        eligendi! Dolore molestias maxime quaerat hic rem.</p>
                </div>
            </section>

            <FeaturedProduct />
            <NewsLatter />
        </>
    )
}

export default ProductDetails