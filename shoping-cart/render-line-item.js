let lineCount = 0;

export function makeTableRow(item, order) {
    let isEven = lineCount % 2;
    lineCount++;

    const trContents = document.createElement('tr');
    if (isEven === 0) {
        trContents.className = 'even';
    } else {
        trContents.className = 'odd';
    }

    const itemNameCell = document.createElement('td');
    itemNameCell.className = item.id;
    itemNameCell.textContent = item.name;
    trContents.appendChild(itemNameCell);

    const itemQuantity = document.createElement('td');
    itemQuantity.className = 'quantity';
    itemQuantity.textContent = order.quantity;
    trContents.appendChild(itemQuantity);

    const itemPrice = document.createElement('td');
    itemPrice.className = 'price';
    itemPrice.textContent = item.price;
    trContents.appendChild(itemPrice);

    const itemRowTotal = document.createElement('td');
    itemRowTotal.className = 'total-row-cost';
    itemRowTotal.textContent = item.price * order.quantity;
    trContents.appendChild(itemRowTotal);

    return trContents;

}