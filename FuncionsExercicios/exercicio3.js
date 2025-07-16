const funciones = require('./OBXETOS_EXERCICIOS');

// Llamadas de prueba a cada ejercicio:
funciones.clientesPorCiudad((err, rows) => {
  console.log("\nEXER1:");
  if (err) return console.error(err);
  console.table(rows);
});

funciones.totalActualizado((err, rows) => {
  console.log("\nEXER2:");
  if (err) return console.error(err);
  console.table(rows);
});

funciones.crearTablaArtistaAlbum((err) => {
  console.log("\nEXER3: Tabla artista_album creada");
  if (err) console.error(err);
});

funciones.crearTablaCancionPlaylistAutor((err) => {
  console.log("\nEXER4: Tabla cancion_playlist_autor creada");
  if (err) return console.error(err);

  funciones.mostrarCancionPlaylistAutor((err, rows) => {
    if (err) return console.error(err);
    console.table(rows);
  });
});

funciones.facturasDeLondres((err, rows) => {
  console.log("\nEXER5:");
  if (err) return console.error(err);
  console.table(rows);
});

funciones.detallesFacturas((err, rows) => {
  console.log("\nEXER6:");
  if (err) return console.error(err);
  console.table(rows);
});

funciones.sumaFacturasLondres((err, row) => {
  console.log("\nEXER7:");
  if (err) return console.error(err);
  console.table(row);
});

funciones.contarAlbums((err, row) => {
  console.log("\nEXER8:");
  if (err) return console.error(err);
  console.table(row);
});

funciones.clientesPorPais((err, rows) => {
  console.log("\nEXER9:");
  if (err) return console.error(err);
  console.table(rows);
});

funciones.clientesPorPaisFiltrado((err, rows) => {
  console.log("\nEXER10:");
  if (err) return console.error(err);
  console.table(rows);
});

funciones.cancionesDeACDC((err, rows) => {
  console.log("\nEXER11:");
  if (err) return console.error(err);
  console.table(rows);
});

funciones.facturaMaxima((err, rows) => {
  console.log("\nEXER12:");
  if (err) return console.error(err);
  console.table(rows);
});

funciones.sumaFacturasPorCliente((err, rows) => {
  console.log("\nEXER13:");
  if (err) return console.error(err);
  console.table(rows);
});

funciones.empleadosPorCiudad((err, rows) => {
  console.log("\nEXER14:");
  if (err) return console.error(err);
  console.table(rows);
});

funciones.artistasYAlbums((err, rows) => {
  console.log("\nEXER15:");
  if (err) return console.error(err);
  console.table(rows);
});

funciones.mediaFacturasPorCliente((err, rows) => {
  console.log("\nEXER16:");
  if (err) return console.error(err);
  console.table(rows);
});
