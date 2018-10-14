import Home from './pages/home';
import Products from './pages/products';

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
