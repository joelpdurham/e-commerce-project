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
    button.value = item.id;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}