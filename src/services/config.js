const apiRoutes = {
  rootBaseURL: 'http://localhost:8000/api/',
  login: 'login',
  getBaseURL: this.rootBaseURL+'usuario/',

  post: {
    usuario: apiRoutes.rootBaseURL+'usuarios',
    persona: apiRoutes.rootBaseURL+'personas',
    departamento: apiRoutes.rootBaseURL+'departamentos',
    empleado: apiRoutes.rootBaseURL+'empleados',
    salario: apiRoutes.rootBaseURL+'salarios',
    direccion: apiRoutes.rootBaseURL+'direcciones',
    documento: apiRoutes.rootBaseURL+'documentos',
    referFamiliar: apiRoutes.rootBaseURL+'familiares',
    referPersonal: apiRoutes.rootBaseURL+'referencias'
  },

  get: {
    logout: apiRoutes.rootBaseURL+'logout/',
    usuario: apiRoutes.rootBaseURL+'usuarios/',
    persona: apiRoutes.rootBaseURL+'personas/',
    departamento: apiRoutes.rootBaseURL+'departamentos/',
    empleado: apiRoutes.rootBaseURL+'empleados/',
    salario: apiRoutes.rootBaseURL+'salarios/',
    direccion: apiRoutes.rootBaseURL+'direcciones/',
    documento: apiRoutes.rootBaseURL+'documentos/',
    referFamiliar: apiRoutes.rootBaseURL+'familiares/',
    referPersonal: apiRoutes.rootBaseURL+'referencias/' 
  }
}

export default apiRoutes