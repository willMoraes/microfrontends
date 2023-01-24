import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 10; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');

  // Assuming out container doesn't contain an element
  // with  id 'dev-products'
  if (el) { 
    // we are probably running in isolation mode
    mount(el); 
  }
}

export { mount };