import LoginComponent from './components/Login.vue'
import DashboardAdmin from './components/admin/DashboardAdmin.vue'
import DashboardUser from './components/user/DashboardUser.vue'

const routes = [
  {path:'/', name:'home', component: LoginComponent},
  {path:'/dashboard/admin', name:'dash-admin', component: DashboardAdmin},
  {path:'/dashboard/user', name:'dash-user', component: DashboardUser},
]

export default routes
