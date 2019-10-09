export function findById(items, id) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        console.log(item);

        if (item.id === id) {
            console.log(item);
            return item;
        }
    }
}