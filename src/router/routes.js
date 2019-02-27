import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import Profile from "@/pages/Profile.vue";
import Notifications from "@/pages/Notifications.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Typography from "@/pages/Typography.vue";
import TableList from "@/pages/TableList.vue";
import Login from '@/pages/Login.vue';

import Empleados from '@/pages/Empleados.vue'
import ListEmpleados from '@/pages/Empleados/ListEmpleados.vue'
import CrearEmpleado from '@/pages/Empleados/CrearEmpleado.vue'

import Departamentos from '@/pages/Departamentos.vue'
import MainDepartments from '@/pages/Departamentos/MainDepartments.vue'
import WebDepartment from '@/pages/Departamentos/WebDepartment.vue'
import DesignDepartment from '@/pages/Departamentos/DesignDepartment.vue'
import CommunityDepartment from '@/pages/Departamentos/CommunityDepartment.vue'
import RecursosDepartment from '@/pages/Departamentos/RecursosDepartment.vue'




const routes = [
  {
    path: "/",
    redirect: "login"
  },

  {
    path: "/login",
    name: "login",
    component: Login
  },

  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardLayout,
    meta: {
      // authenticated: true
    },
    redirect: "/dashboard/resume",
    children: [
      {
        path: "/dashboard/resume",
        name: "resume",
        component: Dashboard
      },
      {
        path: "/dashboard/profile",
        name: "profile",
        component: Profile
      },
      {
        path: "/dashboard/empleados",
        name: "empleados",
        component: Empleados,
        redirect: "/dashboard/empleados/list",
        children : [
          {
            path: "/dashboard/empleados/list",
            name: "list",
            component: ListEmpleados
          },
          {
            path: "/dashboard/empleados/crear",
            name: "crear",
            component: CrearEmpleado
          }
        ]
      },
      {
        path: "/dashboard/departamentos",
        name: "departamentos",
        redirect: "main",
        component: Departamentos,
        children: [
          {
            path: "/dashboard/departamentos/main",
            name: "main",
            component: MainDepartments
          },
          {
            path: "/dashboard/departamentos/web",
            name: "web",
            component: WebDepartment
          },
          {
            path: "/dashboard/departamentos/design",
            name: "design",
            component: DesignDepartment
          },
          {
            path: "/dashboard/departamentos/community",
            name: "community",
            component: CommunityDepartment
          },
          {
            path: "/dashboard/departamentos/recursos",
            name: "recursos",
            component: RecursosDepartment
          },
        ]
      },
      {
        path: "icons",
        name: "icons",
        component: Icons
      },
      {
        path: "maps",
        name: "maps",
        component: Maps
      },
      {
        path: "typography",
        name: "typography",
        component: Typography
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList
      }
    ]
  },

  { path: "*", component: NotFound },

];

// routes.beforeEach((to, from, next) => {
//   let authorization = to.matched.some(record => record.meta.authorization)

//   if (authorization && !user) {
//     next({path: '/login'})
//   }
// })



/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
