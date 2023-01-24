import { mount as productsMount  } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartShow';

productsMount(document.querySelector('#product-container'));
cartMount(document.querySelector('#cart-container'));