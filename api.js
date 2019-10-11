const dekuStick = {
    id: 'deku-stick',
    name: 'Deku Stick',
    image: 'deku-stick.png',
    description: 'Can be used as a torch or weapon.',
    category: 'inventory-item',
    price: 10
};

const bomb = {
    id: 'bomb',
    name: 'Bomb',
    image: 'bomb.png',
    description: 'Used to damage enemies and destroy certain surfaces. Must have a Bomb-Bag',
    category: 'inventory-item',
    price: 25
};

const bombchu = {
    id: 'bumbchu',
    name: 'Bombchu',
    image:'bombchu.png',
    description: 'A mobile bomb that can travel along the ground, walls, and ceilings',
    category: 'inventory-item',
    price: 40
};

const magicBeans = {
    id: 'magic-beans',
    name: 'Magic Beans',
    image: 'magic-beans.png',
    description: 'Plant in soft soil, and wait 7 years.',
    category: 'inventory-item',
    price: 10
};

const keatonMask = {
    id: 'keaton-mask',
    name: 'Keaton Mask',
    image: 'keaton-Mask.png',
    description: 'The Keaton character is renowned throughout Hyrule as a popular figure, predominately among children.',
    category: 'mask',
    price: 10
};

const skullMask = {
    id: 'skull-mask',
    name: 'Skull Mask',
    image: 'skull-mask.png',
    description: 'A strange mask. Prevents Keese attacks.',
    category: 'mask',
    price: 20
};

const spookyMask = {
    id: 'spooky-mask',
    name: 'Spooky Mask',
    image: 'spooky-mask.png',
    description: 'Carved from wood taken from a coffin. Glows in the dark. Scares most people.',
    category: 'mask',
    price: 30
};

const bunnyHood = {
    id: 'bunny-hood',
    name: 'Bunny Hood',
    image: 'bunny-hood.png',
    description: 'Prevents Stalchildren from appearing at night.',
    category: 'mask',
    price: 40
};

const redPotion = {
    id: 'red-potion',
    name: 'Red Potion',
    image: 'red-potion.png',
    description: 'Fills up to 8 heart pieces.',
    category: 'bottled-item',
    price: 40
};

const greenPotion = {
    id: 'green-potion',
    name: 'Green Potion',
    image: 'green-potion.png',
    description: 'Fills up your magic meter.',
    category: 'bottled-item',
    price: 50
};

const bluePotion = {
    id: 'blue-potion',
    name: 'Blue Potion',
    image: 'blue-potion.png',
    description: 'Fills both your hearts and magic meter.',
    category: 'bottled-item',
    price: 60
};

const fairy = {
    id: 'fairy',
    name: 'Fairy',
    image: 'fairy.png',
    description: 'If you die, will bring you back to life with 8 hearts.',
    category: 'bottled-item',
    price: 40
};

export const itemArray = [
    dekuStick, 
    bomb, 
    bombchu, 
    magicBeans, 
    keatonMask, 
    skullMask, 
    spookyMask, 
    bunnyHood, 
    redPotion, 
    greenPotion, 
    bluePotion, 
    fairy
];

export const cart = [{
    item_id: 'deku-stick',
    quantity: 5
}, {
    item_id: 'keaton-mask',
    quantity: 1
}, {
    item_id: 'lon-lon-milk',
    quantity: 2
}, {
    item_id: 'bomb',
    quantity: 4
}];