import AppComponent from './App.vue'
import DashboardAdmin from './components/admin/DashboardAdmin.vue'
import DashboardUser from './components/user/DashboardUser.vue'

const routes = [
  { path: '/', name: 'home', component: AppComponent },
  { path: '/dashboard/admin', name: 'dashboard-admin', component: DashboardAdmin },
  { path: '/dashboard/user', name: 'dashboard-user', component: DashboardUser },
]

export default routes
