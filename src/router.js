import { createRouter, createWebHistory } from "vue-router";
import MainPage from "./views/MainPage.vue";
import LibraryPage from "./views/LibraryPage.vue";
import BandsPage from "./views/BandsPage.vue";
import ConcertPage from "./views/ConcertPage.vue";
import HistoryPage from "./views/HistoryPage.vue";
import BandPage from "./views/BandPage.vue";
import SongPage from './views/SongPage.vue'
import StoryPage from './views/StoryPage.vue'
import AdminPage from './views/AdminPage.vue'


export default createRouter({
    history: createWebHistory(),

    routes: [
        {
            name: "main",
            path: "/",
            component: MainPage,
        },
        {
            name: "library",
            path: "/library",
            component: LibraryPage,
        },
        {
            name: "bands",
            path: "/bands",
            component: BandsPage,
        },
        {
            name: "concert",
            path: "/concert",
            component: ConcertPage,
        },
        {
            name: "history",
            path: "/history",
            component: HistoryPage,
        },
        {
            name: "band",
            path: "/band/:classNumber",
            component: BandPage,
        },
        {
            name: 'song',
            path: '/song/:name',
            component: SongPage
        },
        {
            name: 'story',
            path: '/story/:history',
            component: StoryPage
        },
        {
            name: 'admin',
            path: '/admin/:auth',
            component: AdminPage
        }
    ],
});
