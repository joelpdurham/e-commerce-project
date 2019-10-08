import { itemArray } from '../items.js';
import { renderItem } from '../render-item.js';

const test = QUnit.test;

test('renders an item', function(assert) {
    const dekuStick = itemArray[0];

    const expected = '<li class="inventory-item" title="Can be used as a torch or weapon."><h3>Deku Stick</h3><img src="./assets/deku-stick.png" alt="Deku Stick image"><p class="price"><img src="./assets/rupee.png" alt="rupee"> = 10<button value="deku-stick">Add</button></p></li>';

    const dom = renderItem(dekuStick);
    const html = dom.outerHTML;
   

    assert.equal(html, expected);
});
