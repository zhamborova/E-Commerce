import React from 'react';
import './checkout-item.styles.scss';
import {connect} from "react-redux";
import {addItem, decreaseItemCount, removeItem} from "../../redux/cart/cart.action";

const CheckoutItem = ({item, dispatch}) => {
    const {id,imageUrl,name,quantity, price} =item;
   return <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item'/>
        </div>

        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={()=>{dispatch(decreaseItemCount(item))}}>&#10094;</div>
            <span className='value'>
                {quantity}</span>
                <div className='arrow' onClick={()=>dispatch(addItem(item))}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={()=>dispatch(removeItem(id))}> &#10005;</div>
    </div>

};

export default connect()(CheckoutItem);