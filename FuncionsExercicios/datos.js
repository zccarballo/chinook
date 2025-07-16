///Conexion a base de datos chinook

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(__dirname + "/chinook.db", sqlite3.OPEN_READWRITE, (err) => 
{
    if(err) {
        console.error(err.message);
    }
    console.log("conectado a chinook...");
})

//Exporto conexion 
module.exports = {
    db
}
