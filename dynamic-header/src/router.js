/*System Importing*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import User from "./components/User";
import Player from "./components/Player";
import Header from "./components/Header";


/*Inserting VueRouter to the Vue Framework*/
Vue.use(VueRouter);

/*Array of Paths*/
const routes = [

    {path: '/user', component: User, name: 'User'},
    {path: '/player', component: Player, name: 'Player'},
    {path: '/header', component: Header, name: 'Header'},


];

/*Exporting Array of Paths*/
export const router = new VueRouter({
    mode: 'history',
    // hides hash in url after localhost:8080
    routes: routes
});