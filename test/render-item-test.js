import { itemArray } from '../api.js';
import { renderItem } from '../products/render-item.js';
import { cart } from '../api.js';
import { makeTableRow } from '../shoping-cart/render-line-item.js';
import { findById } from '../utils.js';
import { calcLineItem } from '../utils.js';

const test = QUnit.test;

test('renders an item', function(assert) {
    const dekuStick = itemArray[0];

    const expected = '<li class="inventory-item" title="Can be used as a torch or weapon."><h3>Deku Stick</h3><img src="../assets/deku-stick.png" alt="Deku Stick image"><p class="price"><img src="../assets/rupee.png" alt="rupee">10<button value="deku-stick">Add</button></p></li>';

    const dom = renderItem(dekuStick);
    const html = dom.outerHTML;
   

    assert.equal(html, expected);
});

test('renders an item ROW', function(assert) {
    const dekuStick = itemArray[0];
    const cartFirstItem = cart[0];
    
    const expected = '<tr><td class="deku-stick">Deku Stick</td><td class="quantity">5</td><td class="price">10</td><td class="total-row-cost">50</td></tr>';
    
        
    const dom = makeTableRow(dekuStick, cartFirstItem);
    const html = dom.outerHTML;
       
    
    assert.equal(html, expected);
});

test('matches order id to api item id and returns the matching item', function(assert) {
    
    
    const expected = itemArray[0]; 
        
    const result = findById(itemArray, cart[0].item_id);
    
    assert.equal(result, expected);
});

test('returns a total when given a quantity and a price', function(assert) {
    const item = itemArray[0];
    const quantity = cart[0].quantity;

    const expected = 50; 
        
    const result = calcLineItem(quantity, item.price);
    
    assert.equal(result, expected);
});