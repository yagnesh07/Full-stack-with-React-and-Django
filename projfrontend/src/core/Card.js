import React from 'react';
import ImageHelper from './helper/ImageHelper';
import { Redirect } from 'react-router-dom';
import { addItemToCart, removeItemFromCart } from './helper/cartHelper';


//TODO: Deal with leter
const isAuthenticated = true

const Card = ({ product, 
  addtoCart = true, 
  removeFromCart = false,
 }) => {

    const cardTitle = product ? product.name : "Title not available"
    const cardDescription = product ? product.description : "Default Description"
    const cardPrice = product ? product.price : "Default Price"

    const addToCart = () => {
        if (isAuthenticated) {
            addItemToCart(product, () => {});
            console.log("Added to Cart")
        }else{
            console.log("Login Please!!")
        }
    };

    const getAredirect = (redirect) => {
        if(redirect) {
            return <Redirect to = "/cart"/>;
        }
    }

    const showAddToCart = addToCart => {
        return(
            addToCart && (
                <button
                onClick={addToCart}
                className="btn btn-block btn-outline-success mt-2 mb-2">
                Add to Cart
              </button>
            )
        );
    };

    const showRemoveFromCart = (removeFromCart) => {
        return(
            removeFromCart && (
                <button
                onClick={() => {
                    //TODO: handle this too
                    removeItemFromCart(product._id);
                    console.log("Product removed from cart")
                }}
                className="btn btn-block btn-outline-danger mt-2 mb-2">
                Remove from cart
              </button>
            )
        );
    };

    return (
      <div className="card text-white bg-dark border border-info ">
        <div className="card-header lead">{cardTitle}</div>
        <div className="card-body">
          <ImageHelper product = {product}/>
          <p className="lead bg-success font-weight-normal text-wrap">
            {cardDescription}
          </p>
            <p className="btn btn-success rounded  btn-sm px-4">$ {cardPrice}</p>
          <div className="row">
            <div className="col-12">
              {showAddToCart(addToCart)}
            </div>
            <div className="col-12">
              {showRemoveFromCart(removeFromCart)}
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Card
