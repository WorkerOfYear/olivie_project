import About from "../pages/about/About";
import Artist from "../pages/artist/Artist";
import Artist_detail from "../pages/artist_detail/Artist_detail";
import LoginPage from "../pages/login/LoginPage";
import Search from "../pages/search/Search";

export const routes = [
    {path: '/about', component: About, exact: true},
    {path: '/artist/:search', component: Artist, exact: true},
    {path: '/artist/:artist_id/detail', component: Artist_detail, exact: true},
    {path: '/login', component: LoginPage, exact: true},
    {path: '/register', component: LoginPage, exact: true},
    {path: '/', component: Search, exact: true},
]