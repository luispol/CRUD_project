/**Llamamos la conexión de la base de datos */
const conexion = require('../database/db');

/**Método para guardar los datos*/
exports.save = (req,res)=>{
    //Guardamos los valores que el usuario esta ingresando por medio de variables de tipo constantes
    //Cada variable creada se le asignará el valor que digite el usuario
    const user = req.body.user;
    const apellidos = req.body.apellidos;
    const rol = req.body.rol;
    const correo = req.body.correo;
    //Realizamos la consulta y le especificamos los valores que se han capturado
    conexion.query('INSERT INTO users SET ?',{nombres:user, apellidos:apellidos,rol:rol,correo:correo},(error,results)=>{
        //Condicional si aparece un error
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
}

/**Método para actualizar los datos*/
exports.update = (req,res)=>{
    //Guardamos los valores que el usuario esta ingresando por medio de variables de tipo constantes
    //Cada variable creada se le asignará el valor que digite el usuario
    const id = req.body.id;
    const user = req.body.user;
    const apellidos = req.body.apellidos;
    const rol = req.body.rol;
    const correo = req.body.correo;
    //Realizamos la consulta para actualizar y estos valores capturados se pasarán en un arreglo de objetos, y le especificamos el id
    conexion.query('UPDATE users SET ? WHERE id = ?',[{nombres:user,apellidos:apellidos,rol:rol,correo:correo},id],(error,results)=>{
        //Condicional que nos indicará si hay un error
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
}