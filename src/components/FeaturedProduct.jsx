import React from 'react'
import Card from '../common/Card'
import { Products } from '../shared/Products'
const FeaturedProduct = () => {
    return (
        <section id="product1" className="section-p1">
            <h2>Featured Products</h2>
            <p>Summer Collection New Modern Design</p>
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
    )
}

export default FeaturedProduct