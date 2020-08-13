routes = [
  {
    path: '/',
    componentUrl: './pages/login.html',
  },
  {
    path: '/historial/',
    componentUrl: './pages/padres/historial.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/historialAgregar/',
    componentUrl: './pages/padres/historialAgregar.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/historialPass/',
    componentUrl: './pages/padres/historialPass.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/historialAgregarPass/',
    componentUrl: './pages/padres/historialAgregarPass.html',
    options: {
      transition: 'f7-parallax',
    },
  },
 {
    path: '/tipoRegistro/',
    componentUrl: './pages/tipoRegistro.html',
    options: {
      transition: 'f7-parallax',
    },
  },
   
  {
    path: '/login/',
    componentUrl: './pages/login.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/inicioAdmin/',
    componentUrl: './pages/admin/inicio.html',
    options: {
      transition: 'f7-parallax',
    },
  },
 {
    path: '/angelesAdmin/',
    componentUrl: './pages/admin/angelesAdmin.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/agregarAngelesAdmin/',
    componentUrl: './pages/admin/agregarAngelesAdmin.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  { 
    path: '/editarAngelesAdmin/:id/:nombre/:tipo/:sexo/:raza/:peso/:altura_cm/:fecha_rescate/:edad/:des_condicion/:des_condicion_actual/:adoptado',
    componentUrl: './pages/admin/editarAngelesAdmin.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/citasAdmin/',
    componentUrl: './pages/admin/citasAdmin.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/agregarCitasAdmin/',
    componentUrl: './pages/admin/agregarCitasAdmin.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/refugiosAdmin/',
    componentUrl: './pages/admin/refugiosAdmin.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/agregarRefugiosAdmin/',
    componentUrl: './pages/admin/agregarRefugiosAdmin.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/editarRefugiosAdmin/:id/:nombreR/:direccion/:cp/:telefono/:responsable/:anio_registro',
    componentUrl: './pages/admin/editarRefugiosAdmin.html',
    options: {
      transition: 'f7-parallax',
    },
  },
 {
    path: '/inicioPadre/',
    componentUrl: './pages/padres/inicioP.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/registroP/',
    componentUrl: './pages/padres/registroP.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/perfilPadre/',
    componentUrl: './pages/padres/perfilP.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  
  {
    path: '/angelesLista/',
    componentUrl: './pages/padres/angelesLista.html',
    options: {
      transition: 'f7-parallax',
    },
  },
 {
    path: '/perfilAngel/:id/',
    componentUrl: './pages/padres/perfilAngel.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/citasPadre/',
    componentUrl: './pages/padres/citasP.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/editarPerfilPadre/',
    componentUrl: './pages/padres/editarPerfilP.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/confirmarCita/:idAngel/:nombre/:nombreUser',
    componentUrl: './pages/padres/confirmarCita.html',
    options: {
      transition: 'f7-parallax',
    },
  },


  {
    path: '/registroR/',
    componentUrl: './pages/refugios/registroR.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/inicioRefugio/',
    componentUrl: './pages/refugios/inicioR.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/perfilRefugio/',
    componentUrl: './pages/refugios/perfilR.html',
    options: {
      transition: 'f7-parallax',
    },
  },
   {
    path: '/editarPerfilRefugio/',
    componentUrl: './pages/refugios/editarPerfilR.html',
    options: {
      transition: 'f7-parallax',
    },
  },
   {
    path: '/angelesListaRefugio/',
    componentUrl: './pages/refugios/angelesListaR.html',
    options: {
      transition: 'f7-parallax',
    },
  },
   {
    path: '/agregarAngelRefugio/',
    componentUrl: './pages/refugios/agregarAngelRefugio.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  
  {
    path: '/citasRefugio/',
    componentUrl: './pages/refugios/citasRefugio.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/verCita/:id/:angel/:refugio/:padre',
    componentUrl: './pages/refugios/verCita.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  // Default route, match to all pages (e.g. 404 page)
  {
    path: '(.*)',
    url: './pages/404.html',
  },
]
