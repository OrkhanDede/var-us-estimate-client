import MainScreen from '../pages/MainScreen';
import UserScreen from '../pages/UserScreen';
import HostScreen from '../pages/HostScreen';
import AppScreen from '../pages/AppScreen';

export const routes = [
    { path: '/', component: MainScreen },
    { path: '/app/:id', name: "app", component: AppScreen },
    { path: '/user', component: UserScreen },
    { path: '/host', component: HostScreen }
];