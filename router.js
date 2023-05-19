/**Invocamos nuevamente express con las siguientes lienas de códico */
const express = require('express');
/** Creamos una instancia de un enrutador en Express.js esto para poder poner las rutas y gestionar solicitudes
 * HTTP para rutas específicas*/
const router = express.Router();

/**Hacemos referencia hasta donde esta nuestro archivo de conexión */
const conexion = require('./database/db');

/**Lanzamos una consulta para conectarnos a la base de datos y que traiga todos los registros */
router.get('/',(req,res)=>{
    conexion.query('SELECT * FROM users', (error,results)=>{
        /**Condición por si hay un error */
        if(error){
            throw error;
        }else {
            /**Enviamos los resultados, los resultados le enviamos a la variable results para guardarlos */
            res.render('index', {results:results});
        }
    }) 
})

//Ruta para crear registros
router.get('/create',(req,res)=>{
    /**Linea que va hacer posible que nos renderice hasta nuestra plantilla en este caso es la create.ejs */
    res.render('create');
})


//Ruta para editar los registros, le pasamos un paramtro, en este caso id, para identificar bien cual registro borrar
router.get('/edit/:id', (req,res)=>{
    //Guardamos el id dentro de una variable constante, en este caso se llamará id
    const id = req.params.id;
    //Le pasamos dentro de corchetes el id, que se guardará en la variable anteriormente creada
    conexion.query('SELECT * FROM users WHERE id=?',[id],(error,results)=>{
        if(error){
            throw error;
        }else{
            //Le pasamos user (esto nada mas por conveniencia y el 0 indica que elemento del vector va a seleccionar)
            res.render('edit',{user:results[0]});
        }
    })
})

//Ruta para eliminar el registro, especificandole el respectivo id
router.get('/delete/:id',(req,res)=>{
    //Creacmos una variable de tipo constante para almacenar el id
    const id = req.params.id;
    //Ejecutamos la consulta SQL para eliminar el registro, le pasamos el id dentro de corchetes
    conexion.query('DELETE FROM users WHERE id = ?',[id],(error,results)=>{
        //Condición si existe un error
        if(error){
            throw error;
        }else{
            res.redirect('/');
        }
    })
})
  

//Invocamos los métodos para el CRUD
const crud = require('./controllers/crud');

//Utilizamos a post porque en el formulario agregamos el método de envio de post, y especificamos que ese trabajará
//con el el metodo crud "save" que esta en el archivo crud
router.post('/save',crud.save);

//Utilizamos a post porque en el formulario agregamos el método de envio de post, y especificamos que ese trabajará
//con el el metodo crud "update" que esta en el archivo crud
router.post('/update',crud.update);

//Necesario exportar el router puesto que asi vamos a poder identificar las rutas en los diferentes archivos
module.exports = router;





