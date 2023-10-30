import AppHomepage from './pages/Homepage/Homepage';
import ImagePage from './pages/ImagePage/ImagePage';
import FavouritesPage from './pages/FavouritesPage/FavouritesPage';

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: AppHomepage,
  },
  {
    path: '/image/:id',
    name: 'image-page',
    component: ImagePage,
  },
  {
    path: '/favourites',
    name: "favourites-page",
    component: FavouritesPage,
  }
];

export default routes;