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
    name: "login",
    component: Login,
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: DashboardLayout,
        redirect: "/dashboard/main",
        children: [
          {
            path: "main",
            name: "main",
            component: Dashboard
          },
          {
            path: "profile",
            name: "profile",
            component: Profile
          },
          {
            path: "empleados",
            name: "empleados",
            component: Empleados,
            redirect: "/empleados/list",
            children : [
              {
                path: "list",
                name: "list",
                component: ListEmpleados
              },
              {
                path: "crear",
                name: "crear",
                component: CrearEmpleado
              }
            ]
          },
          {
            path: "departamentos",
            name: "departamentos",
            redirect: "/departamentos/departments",
            component: Departamentos,
            children: [
              {
                path: "departments",
                name: "departments",
                component: MainDepartments
              },
              {
                path: "web",
                name: "web",
                component: WebDepartment
              },
              {
                path: "design",
                name: "design",
                component: DesignDepartment
              },
              {
                path: "community",
                name: "community",
                component: CommunityDepartment
              },
              {
                path: "recursos",
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
      }
    ]
  }
/*
  {
    path: "/",
    component: DashboardLayout,
    //redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "profile",
        name: "profile",
        component: Profile
      },
      {
        path: "empleados",
        name: "empleados",
        component: Empleados,
        redirect: "/empleados/list",
        children : [
          {
            path: "list",
            name: "list",
            component: ListEmpleados
          },
          {
            path: "crear",
            name: "crear",
            component: CrearEmpleado
          }
        ]
      },
      {
        path: "departamentos",
        name: "departamentos",
        redirect: "/departamentos/main",
        component: Departamentos,
        children: [
          {
            path: "main",
            name: "main",
            component: MainDepartments
          },
          {
            path: "web",
            name: "web",
            component: WebDepartment
          },
          {
            path: "design",
            name: "design",
            component: DesignDepartment
          },
          {
            path: "community",
            name: "community",
            component: CommunityDepartment
          },
          {
            path: "recursos",
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
  {
    path: "/login",
    name: "login",
    component: Login
  }
*/
];



/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
