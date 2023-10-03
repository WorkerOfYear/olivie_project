import About from "./pages/about/About";
import ArtistsCards from "./pages/artists_cards/ArtistsCards";
import ArtistDetail from "./pages/artist_detail/ArtistDetail";
import LoginPage from "./pages/login/LoginPage";
import Home from "./pages/home/Home";

export const ABOUT_ROUTE = '/about';
export const ARTISTSCARDS_ROUTE = '/artists-cards';
export const ARTISTDETAIL_ROUTE = '/artist-detail';
export const LOGIN_ROUTE = '/login';
export const REGISTER_ROUTE = '/register';
export const HOME_ROUTE = '/';

export const routes = [
    { path: ABOUT_ROUTE, component: About, exact: true },
    { path: ARTISTSCARDS_ROUTE + '/:search', component: ArtistsCards, exact: true },
    { path: ARTISTDETAIL_ROUTE + '/:artist_id/', component: ArtistDetail, exact: true },
    { path: LOGIN_ROUTE, component: LoginPage, exact: true },
    { path: REGISTER_ROUTE, component: LoginPage, exact: true },
    { path: HOME_ROUTE, component: Home, exact: true },
]