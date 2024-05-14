let xp = 0;
let health = 50;
let gold = 15;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ['wooden sword'];
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const text = document.querySelector('#text');
const xpText = document.querySelector('#xpText');
const goldText = document.querySelector('#goldText');
const healthText = document.querySelector('#healthText');
const monsterStats = document.querySelector('#monsterStats');
const monsterName = document.querySelector('#monsterName');
const monsterHealthText= document.querySelector('#monsterHealth');

//game weapons
const weapons = [
    {name: 'wooden sword', power: 2},
    {name: 'dagger', power: 7},
    {name: 'staff', power: 10},
    {name: 'hammer', power: 15},
    {name: 'sword', power: 25},
    {name: 'spear', power: 30},
    {name: 'sword and shield', power: 35},
    {name: 'halberd', power: 40},
    {name: 'great sword', power: 55},
    {name: 'blessed halberd: befall', power: 75},
    {name: 'holy sword: crucible', power: 100},
];

//game locations
const locations = [

]
