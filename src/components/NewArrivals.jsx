import React from 'react'
import Card from '../common/Card'
import { NewProducts } from '../shared/Products'

const NewArrivals = () => {
    return (
        <section id="product1" className="section-p1">
            <h2>New Arrivals</h2>
            <p>Summer Collection New Modern Design</p>
            <div className="pro_container">
                {
                    NewProducts.map((item) => {
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

export default NewArrivals