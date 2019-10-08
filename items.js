const dekuStick = {
    id: 'deku-stick',
    name: 'Deku Stick',
    image: 'https://gamepedia.cursecdn.com/zelda_gamepedia_en/5/5e/OoT3D_Deku_Stick_Icon.png?version=596132cde651fcb33d1a1c9957c55278',
    description: 'Can be used as a torch or weapon.',
    category: 'inventory-item',
    price: 10
};

const bomb = {
    id: 'bomb',
    name: 'Bomb',
    image: 'https://gamepedia.cursecdn.com/zelda_gamepedia_en/c/ca/OoT3D_Bomb_Icon.png?version=aa6d8e67197271ad0f1d81a028bda953',
    description: 'Used to damage enemies and destroy certain surfaces. Must have a Bomb-Bag',
    category: 'inventory-item',
    price: 25
};

const bombchu = {
    id: 'bumbchu',
    name: 'Bombchu',
    image:'https://gamepedia.cursecdn.com/zelda_gamepedia_en/c/c8/OoT3D_Bombchu_Icon.png?version=1601971e787d1a95a32173c384073de5',
    description: 'A mobile bomb that can travel along the ground, walls, and ceilings',
    category: 'inventory-item',
    price: 40
};

const magicBeans = {
    id: 'magic-beans',
    name: 'Magic Beans',
    image: 'https://gamepedia.cursecdn.com/zelda_gamepedia_en/9/9f/OoT3D_Magic_Bean_Icon.png?version=46a39fa165fff12e3c9cf5a99dd379e1',
    description: 'Plant in soft soil, and wait 7 years.',
    category: 'inventory-item',
    price: 10
};

const keatonMask = {
    id: 'keaton-mask',
    name: 'Keaton Mask',
    image: 'https://gamepedia.cursecdn.com/zelda_gamepedia_en/e/ea/OoT3D_Keaton_Mask_Icon.png?version=fa9e67e8676dd828094775231923af68',
    description: 'The Keaton character is renowned throughout Hyrule as a popular figure, predominately among children.',
    category: 'mask',
    price: 10
};

const skullMask = {
    id: 'skull-mask',
    name: 'Skull Mask',
    image: 'https://gamepedia.cursecdn.com/zelda_gamepedia_en/0/0e/OoT3D_Skull_Mask_Icon.png?version=b2953003c924d1a1d5e6811c7e5f148e',
    description: 'A strange mask. Prevents Keese attacks.',
    category: 'mask',
    price: 20
};

const spookyMask = {
    id: 'spooky-mask',
    name: 'Spooky Mask',
    image: 'https://gamepedia.cursecdn.com/zelda_gamepedia_en/6/65/OoT3D_Spooky_Mask_Icon.png?version=070fcf82a4db1d2a54fe037bba5df70f',
    description: 'Carved from wood taken from a coffin. Glows in the dark. Scares most people.',
    category: 'mask',
    price: 30
};

const bunnyHood = {
    id: 'bunny-hood',
    name: ',Bunny Hood',
    image: 'https://gamepedia.cursecdn.com/zelda_gamepedia_en/3/3d/OoT3D_Bunny_Hood_Icon.png?version=eae235ec48093d1e486159ac7da926e2',
    description: 'Prevents Stalchildren from appearing at night.',
    category: 'mask',
    price: 40
};

const redPotion = {
    id: 'red-potion',
    name: 'Red Potion',
    image: 'https://gamepedia.cursecdn.com/zelda_gamepedia_en/1/1e/OoT3D_Red_Potion_Icon.png?version=777d5f2b323e48c9b83edcb9cc8e51c1',
    description: 'Fills up to 8 heart pieces.',
    category: 'bottled-item',
    price: 40
};

const greenPotion = {
    id: 'green-potion',
    name: 'Green Potion',
    image: 'https://gamepedia.cursecdn.com/zelda_gamepedia_en/1/19/OoT3D_Green_Potion_Icon.png?version=c214ba9bd497c9b61ef1a292969928c9',
    description: 'Fills up your magic meter.',
    category: 'bottled-item',
    price: 50
};

const bluePotion = {
    id: 'blue-potion',
    name: 'Blue Potion',
    image: 'https://gamepedia.cursecdn.com/zelda_gamepedia_en/6/6b/OoT3D_Blue_Potion_Icon.png?version=183a0a191f8f4d9af3b915cbff6329de',
    description: 'Fills both your hearts and magic meter.',
    category: 'bottled-item',
    price: 60
};

const fairy = {
    id: 'fairy',
    name: 'Fairy',
    image: 'https://gamepedia.cursecdn.com/zelda_gamepedia_en/b/b8/OoT3D_Fairy_Icon.png?version=17a668ba4244884834c6eab7dc230859',
    description: 'If you die, will bring you back to life with 8 hearts.',
    category: 'bottled-item',
    price: 40
};

const lonLonMilk = {
    id: 'lon-lon-milk',
    name: 'Lon Lon Milk',
    image: 'https://gamepedia.cursecdn.com/zelda_gamepedia_en/c/c3/OoT3D_Milk_Icon.png?version=99fd8bda6768880046bae6d0130df162',
    description: 'Two servings. Each serving refills 6 hearts.',
    category: 'bottled-item',
    price: 40
};

const itemArray = [
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
    fairy, 
    lonLonMilk
];

export default itemArray;
