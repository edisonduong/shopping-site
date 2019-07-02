import React, { Component } from 'react';

class Product extends React.Component {
    constructor(props) {
        super(props);

        this.addToCart = this.addToCart.bind(this);

        this.state = {
            cart: [],
            motorcycles: [
                {
                    "id": 1,
                    "name": "Ducati 899",
                    "mileage": 3250,
                    "price": 5120
                },
                {
                    "id": 2,
                    "name": "Yamaha R1",
                    "mileage": 34,
                    "price": 12304
                }
            ]
        }
    }

    addToCart(e) {
        this.setState(prevState => ({
            arrayvar: [...prevState.cart, e.target.value]
          }))
    }

    render() {
        return (
            <div className="product-list">
                {this.state.motorcycles.map(item => {

                    return <div className="product" key={item.id}>
                    <ul>
                        <img src="https://via.placeholder.com/400x250.png" alt="Motrocycle"/>
                        <li>{item.name}</li>
                        <li>{(item.mileage).toLocaleString('en')}</li>
                        <li>${(item.price).toLocaleString('en')}</li>
                        <button onClick={(e) => this.addToCart(e)}>Add to cart</button>
                    </ul>
                    </div>
                })}
            </div>
        )
    }
}

export default Product;