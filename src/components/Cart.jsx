import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../utils/CartSlice';


const Cart = () => {
    const dispatch = useDispatch();
    const CartItems = useSelector((store) => store.cart.items)

    return (
        <>
            <section id="page_header" className="card_header">
                <h2>#Proceed to Checkout</h2>
                <p>Read All About our Company or Products </p>
            </section>

            <section id="cart" className="section-p1">
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

                    {CartItems &&
                        CartItems.map((cartItem) => {
                            return (
                                <tbody key={cartItem.id}>
                                    <td><Link onClick={() => dispatch(removeItem(cartItem.id))} ><i className="fas fa-times-circle"></i></Link></td>
                                    <td><img src={cartItem.pro_IMG} alt="item-1" /></td>
                                    <td>{cartItem.desc}</td>
                                    <td>{cartItem.price}</td>
                                    <td><input type="number" value="1" /></td>
                                    <td>$118.19</td>
                                </tbody>
                            )
                        })
                    }
                </table>
            </section>


            <section id="cart_add" className="section-p1">
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
            </section>

        </>
    )
}

export default Cart