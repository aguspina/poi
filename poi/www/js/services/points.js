angular.module('poiApp')
  .service('PointsService', function points() {

    var pois = function () {
      return [
        {
          id: 1,
          title: 'Club Atletico Bernal',
          shortDescription: 'Es un club de barrio',
          longDescription: 'El Club Atletico Bernal es un club fundado en 1942. Contamos con pileta, gimnasio, cancha de basquet/futbol/volley, 6 canchas de tenis de polvo de ladrillo, 3 canchas de paddle, ademas de varias actividades que se realizan en las instalaciones.Te invitamos a vistarnos en Facebook y Twitter.',
          imageUrl: '',
          isStarred: false,
          lat: -34.7073194,
          lon: -58.2783103,
          distance: 0,
          showDistance: function() {return this.distance === 0;}
        },
        {
          id: 2,
          title: 'Remises Iberia',
          shortDescription: 'La remiseria del barrio',
          longDescription: 'La mejor remiseria que podras encontrar en la zona de bernal!',
          imageUrl: '',
          isStarred: false,
          lat: -34.707828,
          lon: -58.2751557,
          distance: 0,
          showDistance: function() {return this.distance === 0;}
        },
        {
          id: 3,
          title: 'Sanatorio Bernal',
          shortDescription: 'El sanatorio donde podras atenderte rapido',
          longDescription: 'Somos una de las instituciones más reconocidas de la zona sur del Gran Buenos Aires, contamos con un equipo de profesionales especialistas en las distintas áreas de la medicina.',
          imageUrl: '',
          isStarred: false,
          lat: -34.7091994,
          lon: -58.2821019,
          distance: 0,
          showDistance: function() {return this.distance === 0;}
        },
        {
          id: 4,
          title: 'Smurfit Kappa',
          shortDescription: 'Tienda de embalajes',
          longDescription: 'Somos una empresa de embalajes reconocida en toda la region!',
          imageUrl: '',
          isStarred: false,
          lat: -34.706508,
          lon: -58.2782888,
          distance: 0,
          showDistance: function() {return this.distance === 0;}
        },
      ];
    };

    return {
      getPois: pois
    };
  });
