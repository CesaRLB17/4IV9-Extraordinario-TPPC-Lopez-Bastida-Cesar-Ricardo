
Morris.Bar({
    element: 'Tecnicas-estudio',
    data: [
      { y: 'Establecer horario', a: 13 },
      { y: 'Realiza apuntes', a: 17 },
      { y: 'Repasar', a: 9 },
      { y: 'Espacio adecuado', a: 17 },
      { y: 'Evitar distraccion', a: 11 },
      { y: 'Adaptar metodologia', a: 1 },
      { y: 'Tecnicas de estudio', a: 7 },
      { y: 'No hay hábitos de estudio', a: 18 }
    ],
    xkey: 'y',
    ykeys: ['a'],
    labels: ['Estudiantes'],
    barColors: ['#1fddff']

  });

  Morris.Donut({
    element: 'Horas-estudio',
    data: [
      {label: "Menos de una hora", value: 39.6},
      {label: "De una hora a dos", value: 27.1},
      {label: "De dos a tres horas", value: 20.8},
      {label: "Más de tres horas", value: 12.5}
    ],
    colors: ['#40E0D0','#FF8C00','#FF0080','red']
  });

  Morris.Donut({
    element: 'ocio',
    data: [
      {label: "Menos de una hora", value: 6.3},
      {label: "De una hora a dos", value: 29.2},
      {label: "De dos a cuatro horas", value: 20.8},
      {label: "De cuatro a seis horas", value: 20.8},
      {label: "Más de seis horas", value: 22.9}
    ],
    colors: ['#03001e','#7303c0','#ec38bc','#fdeff9','#800080']
  });

  Morris.Donut({
    element: 'aprendizaje',
    data: [
      {label: "Visual", value: 45.8},
      {label: "Auditivo", value: 8.3},
      {label: "Kinestesico", value: 45.8}
    ],
    colors: ['#1a2a6c','#b21f1f','#fdbb2d']
  });

  Morris.Bar({
    element: 'Algebra',
    data: [
      { y: '6', a: 24 },
      { y: '7', a: 9 },
      { y: '8', a: 5 },
      { y: '9', a: 6 },
      { y: '10', a: 2 },
      { y: 'No cursada', a: 0 },
      { y: 'Reprobada', a: 2 }
    ],
    xkey: 'y',
    ykeys: ['a'],
    labels: ['Estudiantes'],
    barColors: ['#1a2a6c']
  });

  Morris.Bar({
    element: 'Trigo',
    data: [
      { y: '6', a: 17 },
      { y: '7', a: 8 },
      { y: '8', a: 13 },
      { y: '9', a: 3 },
      { y: '10', a: 4 },
      { y: 'No cursada', a: 0 },
      { y: 'Reprobada', a: 3 }
    ],
    xkey: 'y',
    ykeys: ['a'],
    labels: ['Estudiantes'],
    barColors: ['#b21f1f']
  });

  Morris.Bar({
    element: 'Anali',
    data: [
      { y: '6', a: 19 },
      { y: '7', a: 4 },
      { y: '8', a: 8 },
      { y: '9', a: 6 },
      { y: '10', a: 4 },
      { y: 'No cursada', a: 1 },
      { y: 'Reprobada', a: 6 }
    ],
    xkey: 'y',
    ykeys: ['a'],
    labels: ['Estudiantes'],
    barColors: ['#fdbb2d']
  });

  Morris.Bar({
    element: 'Dife',
    data: [
      { y: '6', a: 10 },
      { y: '7', a: 9 },
      { y: '8', a: 8 },
      { y: '9', a: 4 },
      { y: '10', a: 4 },
      { y: 'No cursada', a: 1 },
      { y: 'Reprobada', a: 12 }
    ],
    xkey: 'y',
    ykeys: ['a'],
    labels: ['Estudiantes'],
    barColors: ['#22c1c3']
  });

  Morris.Bar({
    element: 'Inte',
    data: [
      { y: '6', a: 8 },
      { y: '7', a: 3 },
      { y: '8', a: 5 },
      { y: '9', a: 2 },
      { y: '10', a: 1 },
      { y: 'No cursada', a: 21 },
      { y: 'Reprobada', a: 8 }
    ],
    xkey: 'y',
    ykeys: ['a'],
    labels: ['Estudiantes'],
    barColors: ['#fdbb2d']
  });

  Morris.Bar({
    element: 'Eva-Algebra',
    data: [
      { y: 'Saberes Previos', a: 6 },
      { y: 'Ordinario', a: 27 },
      { y: 'Extraordinario', a: 2 },
      { y: 'ETS', a: 4 },
      { y: 'ETS especial', a: 7 },
      { y: 'No cursada', a: 2 }
    ],
    xkey: 'y',
    ykeys: ['a'],
    labels: ['Estudiantes'],
    barColors: ['#283c86']
  });

  Morris.Bar({
    element: 'Eva-Trigo',
    data: [
      { y: 'Saberes Previos', a: 6 },
      { y: 'Ordinario', a: 32 },
      { y: 'Extraordinario', a: 2 },
      { y: 'ETS', a: 1 },
      { y: 'ETS especial', a: 5 },
      { y: 'No cursada', a: 2 }
    ],
    xkey: 'y',
    ykeys: ['a'],
    labels: ['Estudiantes'],
    barColors: ['#45a247']
  });

  Morris.Bar({
    element: 'Eva-Anali',
    data: [
      { y: 'Saberes Previos', a: 4 },
      { y: 'Ordinario', a: 30 },
      { y: 'Extraordinario', a: 3 },
      { y: 'ETS', a: 3 },
      { y: 'ETS especial', a: 5 },
      { y: 'No cursada', a: 3 }
    ],
    xkey: 'y',
    ykeys: ['a'],
    labels: ['Estudiantes'],
    barColors: ['#EF3B36']
  });

  Morris.Bar({
    element: 'Eva-Dife',
    data: [
      { y: 'Saberes Previos', a: 3 },
      { y: 'Ordinario', a: 35 },
      { y: 'Extraordinario', a: 3 },
      { y: 'ETS', a: 1 },
      { y: 'ETS especial', a: 2 },
      { y: 'No cursada', a: 4 }
    ],
    xkey: 'y',
    ykeys: ['a'],
    labels: ['Estudiantes'],
    barColors: ['#0f9b0f']
  });

  Morris.Bar({
    element: 'Eva-Inte',
    data: [
      { y: 'Saberes Previos', a: 3 },
      { y: 'Ordinario', a: 12 },
      { y: 'Extraordinario', a: 1 },
      { y: 'ETS', a: 1 },
      { y: 'ETS especial', a: 1 },
      { y: 'No cursada', a: 30 }
    ],
    xkey: 'y',
    ykeys: ['a'],
    labels: ['Estudiantes'],
    barColors: ['#a80077']
  });

  Morris.Bar({
    element: 'cursada',
    data: [
      { y: 'Algebra', a: 38 },
      { y: 'Trigonometria', a: 41 },
      { y: 'Analitica', a: 41 },
      { y: 'Diferencial', a: 35 },
      { y: 'Integral', a: 12 },
    ],
    xkey: 'y',
    ykeys: ['a'],
    labels: ['Estudiantes'],
    barColors: ['#66ff00']
  });


  Morris.Bar({
    element: 'recursada',
    data: [
      { y: 'Algebra', a: 8 },
      { y: 'Trigonometria', a: 5 },
      { y: 'Analitica', a: 4 },
      { y: 'Diferencial', a: 9 },
      { y: 'Integral', a: 9 },
    ],
    xkey: 'y',
    ykeys: ['a'],
    labels: ['Estudiantes'],
    barColors: ['#ff4b1f']
  });


  Morris.Bar({
    element: 'nocursada',
    data: [
      { y: 'Algebra', a: 2 },
      { y: 'Trigonometria', a: 2 },
      { y: 'Analitica', a: 3 },
      { y: 'Diferencial', a: 4 },
      { y: 'Integral', a: 27 },
    ],
    xkey: 'y',
    ykeys: ['a'],
    labels: ['Estudiantes'],
    barColors: ['#1fddff']
  });