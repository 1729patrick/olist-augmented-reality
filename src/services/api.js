import CarScene from '../scenes/Car';
import TVScene from '../scenes/TV';
import TableScene from '../scenes/Table';
import Watch from '../scenes/Watch';

export const products = [
  {
    productId: 1,
    image: require('../assets/car.jpg'),
    scene: CarScene,
    title: 'TESLA MODEL X',
    description: '',
  },
  {
    productId: 2,
    image: require('../assets/tv.jpg'),
    scene: TVScene,
    title: 'TV SAMSUNG 55"',
    description: '',
  },
  {
    productId: 3,
    image: require('../assets/wood-table.jpg'),
    scene: TableScene,
    title: 'MESA DE MADEIRA',
    description: '',
  },
  {
    productId: 4,
    image: require('../assets/watch.jpg'),
    scene: Watch,
    title: 'RELÓGIO ROLEX',
    description: '',
  },
];

export const getScene = ({ productId }) => {
  const product = products.find((product) => product.productId === productId);

  if (!product) return null;

  return product.scene;
};
