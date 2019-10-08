import { itemArray } from './items.js';
import { renderItem } from './render-item.js';

const list = document.getElementById('items');

for (let i = 0; i < itemArray.length; i++) {
    const item = itemArray[i];
    const dom = renderItem(item);
    list.appendChild(dom);
}

