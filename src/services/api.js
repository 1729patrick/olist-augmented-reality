import CarScene from '../scenes/Car';
import TVScene from '../scenes/TV';
import TableScene from '../scenes/Table';

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
];

export const getScene = ({ productId }) => {
  const product = products.find((product) => product.productId === productId);

  if (!product) return null;

  return product.scene;
};
