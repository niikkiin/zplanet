// images
import product1 from 'assets/products/category1/prod-1.jpg';
import product2 from 'assets/products/category1/prod-2.jpg';
import product3 from 'assets/products/category1/prod-3.jpg';
import product4 from 'assets/products/category1/prod-4.jpg';
import product5 from 'assets/products/category1/prod-5.jpg';

import product25 from 'assets/products/category1/prod-25.jpg';
import product26 from 'assets/products/category1/prod-26.jpg';
import product27 from 'assets/products/category1/prod-27.jpg';
import product28 from 'assets/products/category1/prod-28.jpg';
import product29 from 'assets/products/category1/prod-29.jpg';
import product30 from 'assets/products/category1/prod-30.jpg';
import product31 from 'assets/products/category1/prod-31.jpg';
import product32 from 'assets/products/category1/prod-32.jpg';

import product101 from 'assets/categories/cat-4.png';

const SHOP_DATA = [
  {
    id: 1,
    title: 'Canned Lechon Variants',
    routeName: 'canned-lechon',
    items: [
      {
        id: 1,
        name: 'ElarZ Canned Lechon Original Flavor',
        description: 'The ORIGINAL Flavor of Leonor and Jose Lontoc. The originators of ELARZ Lechon.',
        imageURL: product1,
        price: 48,
      },
      {
        id: 2,
        name: 'ElarZ Canned Lechon Lagablab',
        description: 'Excellently spiced with siling LABUYO combined with other spices.',
        imageURL: product2,
        price: 56,
      },
      {
        id: 3,
        name: 'ElarZ Canned Lechon Zupremo',
        description: 'Special Spiced flavor 1st of its kind.',
        imageURL: product3,
        price: 56,
      },
      {
        id: 4,
        name: 'ElarZ Canned Lechon Zebu',
        description: 'Special CEBU Flavored lechon By ELARZ.',
        imageURL: product4,
        price: 56,
      },
      {
        id: 5,
        name: 'ElarZ Canned Lechon Paksiw',
        description: 'Classic Lechon Stew Filipino Style.',
        imageURL: product5,
        price: 56,
      },
      {
        id: 25,
        name: 'Lechon Stew 150g',
        description: '',
        imageURL: product25,
        price: 56,
      },
      {
        id: 26,
        name: 'Corned Lechon Original 150g',
        description: '',
        imageURL: product26,
        price: 56,
      },
      {
        id: 27,
        name: 'Corned Lechon Lagablab 150g',
        description: '',
        imageURL: product27,
        price: 56,
      },
      {
        id: 28,
        name: 'Dinuguan 150g',
        description: '',
        imageURL: product28,
        price: 56,
      },
      {
        id: 29,
        name: 'Bopis 150g',
        description: '',
        imageURL: product29,
        price: 56,
      },
      {
        id: 30,
        name: 'Lechon Meat Zebu 350g',
        description: '',
        imageURL: product30,
        price: 56,
      },
      {
        id: 31,
        name: 'Lechon Meat Lagablab 350g',
        description: '',
        imageURL: product31,
        price: 56,
      },
      {
        id: 32,
        name: 'Lechon Meat Original 350g',
        description: '',
        imageURL: product32,
        price: 56,
      },
    ],
  },
  {
    id: 2,
    title: 'ElarZ Special Lechon',
    routeName: 'special-lechon',
    items: [
      {
        id: 1,
        name: 'ElarZ Lechon Conchinillo',
        imageURL: product101,
        description: 'ElarZ Lechon Conchinillo  - Perfect for 08 - 15 PAX',
        price: 48,
      },
      {
        id: 1,
        name: 'ElarZ Lechon Small',
        imageURL: product101,
        description: 'ElarZ Lechon Small  - Perfect for 20 - 35 PAX',
        price: 56,
      },
    ],
  },
];

export default SHOP_DATA;