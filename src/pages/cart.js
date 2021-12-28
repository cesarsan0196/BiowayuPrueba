import React from 'react'
import useStore from '../context/StoreContext.js'
import ProductRow from '../components/ProductRow'

const Cart = () => {
    const { cart, checkout } = useStore()
    console.log(cart)
    return (
      <div>        
        <div>
          <header className="grid grid-cols-3 gap-4">
            <h1>Product</h1>
            <h1>Quantity</h1>
            <h1>Remove Item</h1>
          </header>
          {
            cart.length > 0 ? cart.map((item, index) => <ProductRow key={item} item={index} />) : <h1>Your cart is empty.</h1>
          }
          <button text="Checkout" onClick={() => window.open(checkout.webUrl)} disabled={cart.length === 0} ></button>
          
        </div>
      </div>
    )
  }

  export default Cart