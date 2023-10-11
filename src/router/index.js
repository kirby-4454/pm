import VueRouter from "vue-router"
import HelloWorld from '../components/HelloWorld'
import one from '../components/one'



const router = new VueRouter({
    router: [{
            path: '/HelloWorld',
            componeent: HelloWorld
        },
        {
            path: '/one',
            componeent: one
        },
    ]
})

export default router;