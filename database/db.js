/**Hacemos referencia con una variable de tipo constante al módulo que vamos a ocupar para la conexión a la base de datos
 * en este caso el módulo de mysql de node
*/
const mysql = require('mysql');

/**Creaos una constante para crear la conexión especificando los parametros, ocmo si fuera un objeto de clave valor */
const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'dbcrud'
})

/**En caso que exista un error le ponermos una condición */
conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es: ' + error);
        return
    }
    console.log("Conectado a la BD MySQL!")
})

/**Luego hay que realizar esta liena de comando para poder exportarlo como si fuera un modulo para poder utilizarlo*/
module.exports = conexion;