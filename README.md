# PRUEBA TECNICA PARA LA COMPAÑIA SIMPLEXITY

Este proyecto esta hecho en REACT (reactlogin) con una base de datos creada en MySQL y el servidor en EXPRESS (apilogin), esta diseñado con el fin de almacenar informacion de usuarios, con la cual se puede ingresar, registar, actualizar, y eliminar usuarios de un aplicativo.  Fue creado por: _Gloria Gil_

## Crear base de datos

Primero se debe crear la base de datos llamada **sitio** y despues ejecutar el script **query.sql** que se encuentra en la raiz de este proyecto para crearla e insetar datos de prueba.

Para gestionar el acceso a la base de datos a traves del aplicativo se deben de escribir los accesos a esta en el archivo knexfile.js que se encuentra de la carpeta db dentro del proyecto apilogin.

## Para correr el front y el back

En una consola ejecutar:
~~~
cd apilogin
npm install
npm start
~~~
En otra consola ejecutar:
~~~
cd reactlogin
npm install
npm start
~~~