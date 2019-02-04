import LoginComponent from './components/Login.vue'
import DashboardComponent from './components/dashboard/Dashboard.vue'
// import MainUser from './components/user/MainUser.vue'
import MainComponent from './components/main/Main.vue'
import CreateUser from './components/forms/CreateUser.vue'
import CreateProject from './components/forms/CreateProject.vue'
import FullProfile from './components/profile/FullProfile.vue'
import Departments from './components/departments/Departments.vue'
import DesignDepartment from './components/departments/components/DesignDepartment.vue'
import MarketingDepartment from './components/departments/components/MarketingDepartment.vue'
import WebDepartment from './components/departments/components/WebDepartment.vue'
import Employees from './components/employees/Employees.vue'

const routes = [
  // {path: '*', redirect: {name: 'home'}},

  {path: '/', name: 'home', component: LoginComponent, 
    // children: [
    //   {path: '/dashboard', name: 'dashboard', component: DashboardAdmin, 
    //     children: [
    //       {path: 'profile', name: 'profile', component: FullProfile},
    //       {path: 'create/user', name: 'create-user', component: CreateUser},
    //       {path: 'create/project', name: 'create-project', component: CreateProject},
    //     ]
    //   },
    
    //   {path: '/dashboard/user', name: 'dash-user', component: DashboardUser,
    //     children: [
    //       {path: 'profile', name: 'profile', component: FullProfile},
    //     ]
    //   },
    
    //   {path: 'departments', name: 'departments', component: Departments,
    //     children: [
    //       {path: 'design', name: 'design', component: DesignDepartment},
    //       {path: 'marketing', name: 'marketing', component: MarketingDepartment},
    //       {path: 'web', name: 'web', component: WebDepartment},
    //     ]
    //   },
    
    //   {path: 'employees', name: 'employees', component: Employees}
    // ]
  },

  {path: '/dashboard', name: 'dashboard', component: DashboardComponent, 
    children : [
      {path: 'main' , name: 'main-view', component: MainComponent},
      {path: 'departments', name: 'departments', component: Departments},

    ]
  },
  {path: 'profile', name: 'profile', component: FullProfile},

]

export default routes
