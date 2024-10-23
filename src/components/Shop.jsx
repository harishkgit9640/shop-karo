import React from 'react'
import { Products } from '../shared/Products'
import Card from '../common/Card'
import NewsLatter from './NewsLatter';

const Shop = () => {
    return (
        <>
            <section id="page_header">
                <h2>Super value Deals</h2>
                <p>save more with coupons & up to 70% off!</p>
            </section>
            <section id="product1" className="section-p1">
                <div className="pro_container">
                    {
                        Products.map((item) => {
                            return (
                                <Card key={item.id} data={item} />
                            )
                        }
                        )
                    }
                </div>
            </section>

            <section id="pagination" className="section-p1">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#"><i className="fa fa-long-arrow-alt-right"></i></a>
            </section>
            <NewsLatter />
        </>
    )
}

export default Shop