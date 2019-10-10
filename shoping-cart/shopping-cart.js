import { itemArray } from '../api.js';
import { makeTableRow } from './render-line-item.js';
import { findById, calcLineItem } from '../utils.js';

const cartContents = document.getElementById('cart-import');
const cartTotalContents = document.getElementById('order-total-cell');
const placeOrder = document.getElementById('place-order');
let cartTotal = 0;

let json = localStorage.getItem('CART');
let cart = JSON.parse(json);


if (cart === null) {
    placeOrder.disabled = true;
} else if (cart.length > 0) {
    placeOrder.disabled = false;
    for (let i = 0; i < cart.length; i++) {
        const lineRow = cart[i];
        const quantity = cart[i].quantity;
        const item = findById(itemArray, lineRow.id);
        const dom = makeTableRow(item, lineRow);
        cartTotal = cartTotal + calcLineItem(quantity, item.price);
                    
        cartContents.appendChild(dom);
        cartTotalContents.textContent = cartTotal;
    }
}
