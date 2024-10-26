import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, itemQuantity } from '../utils/CartSlice';


const Cart = () => {
    const dispatch = useDispatch();
    const CartItems = useSelector((store) => store.cart.items)

    const [Quantity, setQuantity] = useState(1)
    const [total, setTotal] = useState(0);
    const handleQuantity = (e, id) => {
        const count = e.target.value;
        setQuantity(parseInt(count))
        dispatch(itemQuantity({ item_count: Quantity, id: id },))
        setTotal((pre) => pre + CartItems.price)

    }

    let g_total = 0;
    return (
        <>
            <section id="page_header" className="card_header">
                <h2>#Proceed to Checkout</h2>
                <p>Read All About our Company or Products </p>
            </section>

            <section id="cart" className="section-p1">
                {CartItems.length !== 0 &&
                    <table width="100%">
                        <thead>
                            <tr>
                                <td>Remove</td>
                                <td>Image</td>
                                <td>Product</td>
                                <td>Price</td>
                                <td>Quantity</td>
                                <td>Subtotal</td>
                            </tr>
                        </thead>
                        <tbody>
                            {CartItems.map((cartItem, index) => {
                                return (
                                    <tr key={index}>
                                        <td><Link onClick={() => dispatch(removeItem({ id: cartItem.id }))} ><i className="fas fa-times-circle"></i></Link></td>
                                        <td><img src={cartItem.pro_IMG} alt="item-1" /></td>
                                        <td>{cartItem.desc}</td>
                                        <td>{cartItem.price}</td>
                                        <td><input type="number" value={Quantity} onChange={(e) => handleQuantity(e, cartItem.id)} min={1} /></td>
                                        <td>{cartItem.price}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                }
            </section>

            {CartItems.length === 0 ? <h1 className='center'> Empty Cart! ShopKaro </h1> :
                (<section id="cart_add" className="section-p1">
                    <div className="coupon">
                        <h3>Apply Coupon</h3>
                        <div>
                            <input type="text" placeholder="Enter Your Coupon" />
                            <button className="normal">Apply</button>
                        </div>
                    </div>
                    <div id="sub_total">
                        <h3>Cart Totals</h3>
                        <table>
                            <tr>
                                <td>Cart Subtotal</td>
                                <td>$ 335</td>
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td>Free</td>
                            </tr>
                            <tr>
                                <td><strong>Total</strong></td>
                                <td><strong>$ 355</strong></td>
                            </tr>
                        </table>
                        <button className="normal">Proceed to checkout</button>
                    </div>
                </section>)
            }

        </>
    )
}

export default Cart