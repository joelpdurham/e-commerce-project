import { findById } from '../utils.js';

export function renderItem(item) {
    const li = document.createElement('li');
    li.className = item.category;
    li.title = item.description;

    const h3 = document.createElement('h3');
    h3.textContent = item.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + item.image;
    img.alt = item.name + ' image';
    li.appendChild(img);

    const rupeeImg = document.createElement('img');
    rupeeImg.src = '../assets/rupee.png';
    rupeeImg.alt = 'rupee';

    const p = document.createElement('p');
    p.className = 'price';
    p.textContent = item.price;

    p.prepend(rupeeImg);

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.id = item.id;
    button.addEventListener('click', () => {
        let json = localStorage.getItem('CART');
        let cart;

        if (json) {
            cart = JSON.parse(json);
        }
        else {
            cart = [];
        }

        let lineItem = findById(cart, item.id);

        if (!lineItem) {
            lineItem = {
                id: item.id,
                quantity: 1
            };

            cart.push(lineItem);
        }
        else {
            lineItem.quantity++;
        }

        json = JSON.stringify(cart);
        localStorage.setItem('CART', json);

        h3.textContent = item.name + ' - ' + lineItem.quantity;
    });

    p.appendChild(button);

    /*const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.id = removeButton.id;
    button.addEventListener('click', () => {
        let json = localStorage.getItem('CART');
        let cart;

        let lineItem = findById(cart, item.id);

        if (!lineItem) {
            alert('Your cart is empty of ' + item.name);
        } else {
            lineItem.quantity--;
        }

        json = JSON.stringify(cart);
        localStorage.setItem('CART', json);

        h3.textContent = item.name + ' - ' + lineItem.quantity;
    });*/

    
    li.appendChild(p);
    //li.appendChild(removeButton);

    return li;
}