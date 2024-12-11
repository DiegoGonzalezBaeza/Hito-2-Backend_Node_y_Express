# HITO 2 - Node.js - Express - API
# Hito-2-Backend_Node_y_Express

Proyecto educativo básico "Creación de un servidor" con node y express

API de Review y Rating de peliculas (IMDb y Rotten Tomatoes) 

ESTA ES LA CONTINUACIÓN DEL REPOSITORIO: https://github.com/DiegoGonzalezBaeza/Hito-1-

# Sistema de Gestión de Base de Datos

- **PostgresSql**: Es un sistema de gestión de bases de datos relacional (RDBMS) de código abierto, robusto y ampliamente utilizado.

Características clave:
Relacional y Orientado a Objetos: Soporta relaciones tradicionales y también características avanzadas como herencia y tipos de datos personalizados.
Consultas Avanzadas: Compatible con SQL estándar y extensiones propias.
Escalabilidad: Ideal para proyectos pequeños y grandes; puede manejar grandes volúmenes de datos.

- **Docker**: Es una plataforma que permite crear, desplegar y ejecutar aplicaciones dentro de contenedores.
¿Qué son los contenedores?
Son entornos ligeros y portátiles que incluyen todo lo necesario para que una aplicación funcione (código, dependencias, librerías, etc.). Son como "máquinas virtuales" pero mucho más eficientes.

Ventajas principales:
Portabilidad: Los contenedores se ejecutan de la misma manera en cualquier entorno, ya sea tu computadora, un servidor, o la nube.
Aislamiento: Cada contenedor es independiente, evitando conflictos entre aplicaciones.
Eficiencia: Consume menos recursos que las máquinas virtuales tradicionales.
Escalabilidad: Facilita la gestión de aplicaciones distribuidas.

Se debe crear el archivo docker-compose.yml y luego usar el siguiente comando: 

```bash
docker compose up -d
```

sirve para levantar tal archivo y no lo va tomar la terminal (en segundo plano). se va demorar por que tambien el codigo va descargar postgres (151 m) si es que no lo tiene.

RECORDAR: que la aplicación de docker debe estar abierta.

### Comandos

```bash
docker compose up -d # Inicia los contenedores en segundo plano
docker compose stop # Detiene los contenedores
docker compose down # Detiene y elimina los contenedores
dokcer compose logs db # Muestra los logs del contenedor db
```



# 1.- Instalar node postgres:

Permite conectar el proyecto con la base de datos

```bash
npm install pg
```
```bash
npm i --save-dev @types/pg
```

# 2.- Connection URI

https://node-postgres.com/features/connecting

Crear el archivo database.ts, el cual permite conectar con la base de datos, se usara el metodo de conección URI

```ts
import pg from "pg";

const {Pool} = pg;

// const connectionString = 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb'
// cambiar con los datos de docker-compose.yml:

const connectionString = 'postgresql://postgres:root@localhost:5434/db_hito'

export const pool = new Pool({
    connectionString,
    allowExitOnIdle: true,
});
```

# 3.- Model.ts

Con la clase pool creada en database.ts, se deben crear los modelos de datos utlizando tal herramienta, recordar que se debe parametrizar los datos para que exista una conexión eficiente con la base de datos. (Esto evita las inyecciones en SQL).


# 4. Json Web Token

jwt.io

# 5. LOGGER Winston

Se utiliza para crear un registro de todos errores o información que uno desee.

```bash
npm install winston
```
```bash
npm install --save-dev @types/winston
```
automáticamente se crea la carpeta logger.

# 6. Políticas de trotting

Limitaciones creadas, pueden ser ventanas de tiempo (para contabilizar las solicitudes), limites de solicitudes y Acciones a tomar

```bash
npm install express-rate-limit
```


# 6. Aplicacion de Buenas Prácticas en Diseño de una API REST - Endpoints y Swagger

Se deben instalar estas 2 liberrías:

```bash
npm install swagger-jsdoc swagger-ui-express
```

-swagger-jsdoc: Genera la especificación OpenAPI (Swagger) a partir de los comentarios jsdoc

-swagger-ui-express: Proporciona una interfaz de usuario interactiva para explorar la documentación de la API.

dependencia de desarrollo:
```bash
npm i --save-dev @types/swagger-jsdoc
```
```bash
npm i --save-dev @types/swagger-ui-express
```
# CRUD COMPLETA PARA LA TABLA DE REVIEWS

![image](./images/API_swagger.webp)
