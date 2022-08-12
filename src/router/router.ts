import { Router,  } from 'vue-router'
//import App from '../App.vue'
import HomeComponent from '../components/HomeComponent.vue'
import PatientView from '../views/PatientView.vue'

const router = ({
    routes: [

        {
            path: '/HomeComponent',
            name: 'HomeComponent',
            props: true,
            component: HomeComponent
        },

        {
            path: '/PatientView/:id',
            name: 'PatientView',
            props: true,
            component: PatientView
        },

    ]
})

export default router
