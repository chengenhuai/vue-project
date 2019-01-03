import Vue from 'vue'
import Router from 'vue-router'
import Indexpage from '@/components/singer/index'
import shopcar from "@/components/shopping/shopcar"
import Music from "@/components/music/music"
import Recommend from "@/components/music/recommend"
import RankingList from "@/components/music/rankinglist"
import SearchMusic from "@/components/music/searchmusic"
import Details from "@/components/music/details"
import Toplistdetils from "@/components/music/toplistdetils"
import Meituan from "@/components/meituan/meituan"

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Index',
            component: Indexpage
        }, {
            path: '/shopcar',
            name: "shopcar",
            component: shopcar
        }, {
            path: '/music',
            component: Music,
            redirect: "/music/recommend",
            children: [{
                path: "/music/recommend",
                component: Recommend
            }, {
                path: "/music/rankinglist",
                component: RankingList
            }, {
                path: "/music/searchmusic",
                component: SearchMusic
            }]
        }, {
            path: "/music/details",
            component: Details
        }, {
            path: "/music/recommend/id:",
            name: "recommend",
            component: Details
        }, {
            path: "/music/toplistdetils",
            component: Toplistdetils
        }, {
            path: "/meituan",
            component: Meituan
        }
    ]
})