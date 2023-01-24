import faker from 'faker';

const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} itens in your cart.</div>`;

  el.innerHTML = cartText;
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-cart');

  // Assuming out container doesn't contain an element
  // with  id 'dev-products'
  if (el) { 
    // we are probably running in isolation mode
    mount(el); 
  }
}

export { mount }