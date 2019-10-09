export function findById(items, id) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        if (item.id === id) {
            return item;
        }
    }
}

export function calcLineItem(quantity, price) {
    const total = quantity * price;
    return total;
}

export function calcCartTotal(item, quantity) {
    const lineTotal = calcLineItem(item, quantity);
    let cartTotal = cartTotal + lineTotal;
    return cartTotal;
}