//Referenciamos a express por medio de la siguiente linea, creando lo que es una variable de tipo constante
const express = require('express');
//Luego lo invocamos por su propio método
const app = express();

/**Invocamos al motor de plantillas ejs que nos permita incrustar código JavaScript directamente en nuestra
 * plantilla, lo que facilita la iteración sobre datos.*/
app.set('view engine','ejs');


/**Lineas que nos sirven para especificarle a node, como vamos a capturar los datos,
 * El middleware express.urlencoded() se utiliza para analizar y extraer estos datos 
 * codificados del cuerpo de la solicitud y hacerlos accesibles en req.body. Y el extended:false es una configuración adicional
 * lo cual siginifca que los objetos anidados no se permiten en los datos analizados
 */
app.use(express.urlencoded({extended:false}));
/**Con esta línea especificamos que los tipos de datos con el método de envió POST son de tipo JSON */
app.use(express.json());

/**Hacemos referencia nuestro enrutador */
app.use('/',require('./router'));

//Luego le indicamos a express que esta guardado en la variable anteriormente creada, en que puerto
//Y especificamos uan funcion de tipo flecha que nos mostrará un mensaje en consola, básicamente es par verificar si todo
//esta corriendo bien
app.listen(5000,()=>{
    console.log('SERVER corriendo: http://localhost:5000')
})