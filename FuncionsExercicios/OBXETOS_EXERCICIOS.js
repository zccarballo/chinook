///Importo datos de la db para hacer ejercicios
const { db } = require('./datos');

// EXER1
const clientesPorCiudad = (callback) => {
  const sql = "SELECT * FROM customers WHERE City LIKE '%on' OR City LIKE '%as'";
  db.all(sql, [], callback);
};

// EXER2
const totalActualizado = (callback) => {
  const sql = "SELECT Total, Total * 0.10 + Total AS 'Total actualizado' FROM invoices";
  db.all(sql, [], callback);
};

// EXER3
const crearTablaArtistaAlbum = (callback) => {
  const sql = `
    CREATE TABLE IF NOT EXISTS artista_album AS
    SELECT artists.ArtistId, artists.Name, albums.AlbumId, albums.Title
    FROM artists
    JOIN albums ON artists.ArtistId = albums.ArtistId
  `;
  db.run(sql, callback);
};

// EXER4
const crearTablaCancionPlaylistAutor = (callback) => {
  const sql = `
    CREATE TABLE IF NOT EXISTS cancion_playlist_autor AS
    SELECT 
      tracks.TrackId,
      tracks.Name AS TrackName,
      playlist_track.PlaylistId,
      artista_album.ArtistId,
      artista_album.Name AS ArtistaName
    FROM 
      playlist_track
    JOIN 
      tracks ON playlist_track.TrackId = tracks.TrackId
    JOIN 
      artista_album ON tracks.AlbumId = artista_album.AlbumId
  `;
  db.run(sql, callback);
};

const mostrarCancionPlaylistAutor = (callback) => {
  const sql = "SELECT * FROM cancion_playlist_autor";
  db.all(sql, [], callback);
};

// EXER5
const facturasDeLondres = (callback) => {
  const sql = "SELECT InvoiceId FROM invoices WHERE BillingCity = 'London'";
  db.all(sql, [], callback);
};

// EXER6
const detallesFacturas = (callback) => {
  const sql = `
    SELECT 
      tracks.TrackId,
      invoice_items.TrackId AS InvoiceTrackId,
      invoices.InvoiceId,
      customers.CustomerId
    FROM 
      playlist_track
    JOIN tracks ON playlist_track.TrackId = tracks.TrackId
    JOIN invoice_items ON tracks.TrackId = invoice_items.TrackId
    JOIN invoices ON invoice_items.InvoiceId = invoices.InvoiceId
    JOIN customers ON invoices.CustomerId = customers.CustomerId
  `;
  db.all(sql, [], callback);
};

// EXER7
const sumaFacturasLondres = (callback) => {
  const sql = "SELECT SUM(Total) AS Suma FROM invoices WHERE BillingCity = 'London'";
  db.get(sql, [], callback);
};

// EXER8
const contarAlbums = (callback) => {
  const sql = "SELECT COUNT(AlbumId) AS Cantidad FROM albums";
  db.get(sql, [], callback);
};

// EXER9
const clientesPorPais = (callback) => {
  const sql = "SELECT Country, COUNT(*) AS CantidadClientes FROM customers GROUP BY Country";
  db.all(sql, [], callback);
};

// EXER10
const clientesPorPaisFiltrado = (callback) => {
  const sql = `
    SELECT Country, COUNT(*) AS CantidadClientes
    FROM customers
    GROUP BY Country
    HAVING COUNT(*) > 3
    ORDER BY CantidadClientes
  `;
  db.all(sql, [], callback);
};

// EXER11
const cancionesDeACDC = (callback) => {
  const sql = `
    SELECT
      tracks.Composer,
      tracks.Name,
      tracks.MediaTypeId,
      media_types.Name AS TipoMedia
    FROM media_types 
    JOIN tracks ON media_types.MediaTypeId = tracks.MediaTypeId 
    WHERE Composer = 'AC/DC'
  `;
  db.all(sql, [], callback);
};

// EXER12
const facturaMaxima = (callback) => {
  const sql = `
    SELECT CustomerId, Total
    FROM invoices
    WHERE Total = (SELECT MAX(Total) FROM invoices)
  `;
  db.all(sql, [], callback);
};

// EXER13
const sumaFacturasPorCliente = (callback) => {
  const sql = "SELECT CustomerId, SUM(Total) AS Suma FROM invoices GROUP BY CustomerId";
  db.all(sql, [], callback);
};

// EXER14
const empleadosPorCiudad = (callback) => {
  const sql = "SELECT City, COUNT(EmployeeId) AS CantidadEmpleados FROM employees GROUP BY City";
  db.all(sql, [], callback);
};

// EXER15
const artistasYAlbums = (callback) => {
  const sql = `
    SELECT artists.ArtistId, artists.Name, albums.Title
    FROM artists
    JOIN albums ON albums.ArtistId = artists.ArtistId
    ORDER BY albums.Title
  `;
  db.all(sql, [], callback);
};

// EXER16
const mediaFacturasPorCliente = (callback) => {
  const sql = `
    SELECT
      invoices.CustomerId,
      customers.FirstName,
      customers.LastName,
      ROUND(AVG(invoices.Total), 2) AS MediaFacturas
    FROM customers
    JOIN invoices ON customers.CustomerId = invoices.CustomerId
    GROUP BY invoices.CustomerId
  `;
  db.all(sql, [], callback);
};

module.exports = {
  clientesPorCiudad,
  totalActualizado,
  crearTablaArtistaAlbum,
  crearTablaCancionPlaylistAutor,
  mostrarCancionPlaylistAutor,
  facturasDeLondres,
  detallesFacturas,
  sumaFacturasLondres,
  contarAlbums,
  clientesPorPais,
  clientesPorPaisFiltrado,
  cancionesDeACDC,
  facturaMaxima,
  sumaFacturasPorCliente,
  empleadosPorCiudad,
  artistasYAlbums,
  mediaFacturasPorCliente
};
