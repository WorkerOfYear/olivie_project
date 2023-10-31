import About from "./pages/about/About";
import ArtistsCards from "./pages/artists_cards/ArtistsCards";
import ArtistDetail from "./pages/artist_detail/ArtistDetail";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import MyResume from "./pages/myresume/MyResume";
import CreateResume from "./components/createresume/CreateResume";

export const ABOUT_ROUTE = '/about';
export const ARTISTSCARDS_ROUTE = '/artists-cards';
export const ARTISTDETAIL_ROUTE = '/artist-detail';
export const LOGIN_ROUTE = '/login';
export const REGISTER_ROUTE = '/register';
export const HOME_ROUTE = '/';
export const MY_RESUME = '/my-resume';
export const CREATE_RESUME = '/create-resume';

export const routes = [
    { path: ABOUT_ROUTE, component: About, exact: true },
    { path: ARTISTSCARDS_ROUTE + '/:search', component: ArtistsCards, exact: true },
    { path: ARTISTDETAIL_ROUTE + '/:artist_id/', component: ArtistDetail, exact: true },
    { path: LOGIN_ROUTE, component: Login, exact: true },
    { path: REGISTER_ROUTE, component: Register, exact: true },
    { path: HOME_ROUTE, component: Home, exact: true },
    { path: MY_RESUME, component: MyResume, exact: true },
    { path: CREATE_RESUME, component: CreateResume, exact: true },
]