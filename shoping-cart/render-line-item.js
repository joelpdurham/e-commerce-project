export function makeTableRow(item, order) {
    const trContents = document.createElement('tr');

    const itemNameCell = document.createElement('td');
    itemNameCell.className = 'deku-stick';
    itemNameCell.textContent = 'Deku Stick';
    trContents.appendChild(itemNameCell);

    const itemQuantity = document.createElement('td');
    itemQuantity.className = 'quantity';
    itemQuantity.textContent = 5;
    trContents.appendChild(itemQuantity);

    const itemPrice = document.createElement('td');
    itemPrice.className = 'price';
    itemPrice.textContent = 10;
    trContents.appendChild(itemPrice);

    const itemRowTotal = document.createElement('td');
    itemRowTotal.className = 'total-row-cost';
    itemRowTotal.textContent = 50;
    trContents.appendChild(itemRowTotal);

    return trContents;

}