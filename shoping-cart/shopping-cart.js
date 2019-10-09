import { itemArray } from '../api.js';
import { makeTableRow } from './render-line-item.js';
import { findById } from '../utils.js';

const cartContents = document.getElementById('cart-import');

export const cart = [{
    item_id: 'deku-stick',
    quantity: 5
}, {
    item_id: 'keaton-mask',
    quantity: 1
}, {
    item_id: 'lon-lon-milk',
    quantity: 2
}, {
    item_id: 'bomb',
    quantity: 4
}];

for (let i = 0; i < cart.length; i++) {
    const lineRow = cart[i];
    const item = findById(itemArray, lineRow.item_id);
    const dom = makeTableRow(item, lineRow);

    cartContents.appendChild(dom);
}

