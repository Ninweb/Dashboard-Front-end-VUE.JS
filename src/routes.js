import LoginComponent from './components/Login.vue'
import DashboardAdmin from './components/admin/DashboardAdmin.vue'
import DashboardUser from './components/user/DashboardUser.vue'
import CreateUser from './components/forms/CreateUser.vue'
import CreateProject from './components/forms/CreateProject.vue'
import FullProfile from './components/profile/FullProfile.vue'
import Departments from './components/departments/Departments.vue'
import DesignDepartment from './components/departments/components/DesignDepartment.vue'
import MarketingDepartment from './components/departments/components/MarketingDepartment.vue'
import WebDepartment from './components/departments/components/WebDepartment.vue'
import Employees from './components/employees/Employees.vue'

const routes = [
  {path: '/', name: 'home', component: LoginComponent},

  {path: '/dashboard/admin', name: 'dash-admin', component: DashboardAdmin, 
    children: [
      {path: 'profile', name: 'profile', component: FullProfile},
      {path: 'create/user', name: 'create-user', component: CreateUser},
      {path: 'create/project', name: 'create-project', component: CreateProject},
    ]
  },

  {path: '/dashboard/user', name: 'dash-user', component: DashboardUser,
    children: [
      {path: 'profile', name: 'profile', component: FullProfile},
    ]
  },

  {path: 'departments', name: 'departments', component: Departments,
    children: [
      {path: 'design', name: 'design', component: DesignDepartment},
      {path: 'marketing', name: 'marketing', component: MarketingDepartment},
      {path: 'web', name: 'web', component: WebDepartment},
    ]
  },

  {path: 'employees', name: 'employees', component: Employees}
]

export default routes
