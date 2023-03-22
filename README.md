
<p align='center'>
    <img src='./multimedia/105977398_1022271888192761_4771831057490710035_n.jpg' </img>
</p>

# Control de Stock - Pluma Blanca

<p align="center">
  <img height="200" src="./multimedia/logogrande.jpg" />
</p>

## Introduccion
Esta proyecto esta Creado con el objetivo de potenciar mi marca personal y que tanto los usuarios como las empresas puedan ver mi datos,experiencia, habilidades, etc.
Tabien a su vez busco que Puedan interactuar y ver mi trabajo en funcionamiento

## Objetivos del Proyecto

- Optimizar tiempo para la realización de pedidos
- Optimizar el tiempo de los empleados a la hora de cargar stock
- Tener control sobre las ventas
- Optimizar la comisión de cada empleado
- Mejorar la comunicación en cuanto a pedidos tanto por parte del Jefe como de los 
Empleados
- Tener control en cualquier dispositivo conectado a internet.

## Funciones

- Administrador: Tendrá acceso en todo momento desde un dispositivo conectado a internet, e ste 
usuario podrá ver las ventas generadas por sus empleados, ver la cantidad de empleados activos y 
tener control total sobre los usuarios, sacar la comisión de ventas dependiendo la venta de cada 
empleado, poder generar un pre pedido en el cual la misma aplicación te dará sugerencias de 
prendas que ya no queden o que queden pocas y hayan tenido una buena venta, cargar productos 
nuevos, tener registro de las ganancias generadas por mes, entre otras.
- Empleado: Tendrán acceso durante sus respectivas horas laborales, podrán contar y cargar stock 
nuevo, ver la cantidad que tienen de cada producto, podrán enviar una notificación al 
administrador en caso de que ellos vean necesario pedir un producto nuevo o más de uno 
existente, registrar una venta de un producto, entre otras.
- Funciones Aplicación: la aplicación contara con sugerencias para realizar pedidos en caso de que 
no haya más de un producto o en caso de que un producto se esté vendiendo muy bien y estén 
quedando pocas unidades te sugerirá que lo agregues al nuevo pedido, una vez llegado al local el 
pedido los empleados con solo corroborar que lo enviado coincida con lo pedido solo tendrán que 
cargar el pedido automáticamente la aplicación pasara ese pedido que se encontraba en pre 
encargue al stock ya existente permitiéndonos ahorrar tiempo, en caso de que no coincidan 
ciertas cosas podrán modificarlo y cargarlo.

## Comenzando

 1. Forkear el repositorio para tener una copia del mismo en sus cuentas
 2. Clonar el repositorio en sus computadoras para comenzar a trabajar

Tendrán un `boilerplate` con la estructura general tanto del servidor como de cliente.

__IMPORTANTE:__ Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

 * __Node__: 12.18.3 o mayor
 * __NPM__: 6.14.16 o mayor

Para verificar que versión tienen instalada:

> node -v
>
> npm -v

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos llamada `Pluma Blanca`

El contenido de `client` fue creado usando: Create React App.

## Datos Tecnicos

Esta aplicación será desarrollada con diversas tecnologíassiempre en base al lenguaje de 
programación JavaScript.
En la parte del Front se utilizaráReact js | Redux | HTML | SAss | Auth0, para la parte del Back se 
utilizara Express | Node.js y en la base de datos se utilizara SQL(Postgres) | Seque lize.


## Imagenes Prototipo

<img src="./multimedia/render1.jpg" alt='propuesta 1'/>
<img src="./multimedia/render2.jpg" alt='propuesta 2'/>
