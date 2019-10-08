import { itemArray } from '../items.js';
import { renderItem } from '../render-item.js';

const test = QUnit.test;

test('renders an item', function(assert) {
const dekuStick = itemArray[0];
    console.log(dekuStick);

    const expected = '<li class="inventory-item" title="Can be used as a torch or weapon."><h3>Deku Stick</h3><img src="./assets/deku-stick.png" alt="Deku Stick image"><p class="price">10<button value="deku-stick">Add</button></p></li>';

    
    const dom = renderItem(dekuStick);
    console.log(dom);
    const html = dom.outerHTML;
    console.log(html);
   

    assert.equal(html, expected);
});
