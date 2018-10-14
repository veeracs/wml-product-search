import Home from '../app/pages/home';
import Products from '../app/pages/products';

const Routes = [
  {
    ...Home,
    path: '/',
    exact: true
  },
  {
    ...Products,
    path: '/products'
  }
];

export default Routes;
