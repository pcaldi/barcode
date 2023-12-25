const data = [
  {
    name: 'Cristal Select Normal',
    price: 'R$ 0,95',
    code: '7898944548015',
    image: "https://res.cloudinary.com/dydeznt3c/image/upload/c_crop,g_auto,h_800,w_800/mjjlprev19u8k4lmlacu.jpg",
  },
  {
    name: 'Cristal Select C/Gás',
    price: 'R$ 1,05',
    code: '7898944548022',
    image: "https://res.cloudinary.com/dydeznt3c/image/upload/t_agua-cgas/agua-com-gas.jpg",
  },
  {
    name: 'Pentel Grafite 0.5mm',
    price: 'R$ 2,95',
    code: '7898419152273',
    image: "https://res.cloudinary.com/dydeznt3c/image/upload/t_grafite/grafite_pentel_05mm.jpg",
  },
  {
    name: 'Borracha Staedtler',
    price: 'R$ 5,90',
    code: '4007817504598',
    image: "https://res.cloudinary.com/dydeznt3c/image/upload/v1703531413/fjs7gmq1oeok8qkad7uc.png",
  }
];

export type IProduct = {
  name: string;
  price: string;
  code: string;
  image: string;
}

export function findProductByCode(code: string) {
  return data.find((product) => product.code === code);
}


