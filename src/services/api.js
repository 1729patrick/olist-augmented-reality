import CarScene from '../scenes/Car';
import TVScene from '../scenes/TV';
import TableScene from '../scenes/Table';
import Watch from '../scenes/Watch';

export const products = [
  {
    productId: 1,
    image: require('../assets/car.jpg'),
    scene: CarScene,
    title: 'Tesla',
    description: '',
  },
  {
    productId: 2,
    image: require('../assets/tv.jpg'),
    scene: TVScene,
    title: 'TV',
    description: '',
  },
  {
    productId: 3,
    image: require('../assets/wood-table.jpg'),
    scene: TableScene,
    title: 'Mesa de Madeira',
    description: '',
  },
  {
    productId: 4,
    image: require('../assets/watch.jpg'),
    scene: Watch,
    title: 'Relógio',
    description: '',
  },
];

export const getScene = ({ productId }) => {
  const product = products.find((product) => product.productId === productId);

  if (!product) return null;

  return product.scene;
};
