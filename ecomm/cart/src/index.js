import faker from 'faker';

const cartText = `<div>You have ${faker.random.number()} itens in your cart.</div>`;

document.querySelector('.dev-cart').innerHTML = cartText;