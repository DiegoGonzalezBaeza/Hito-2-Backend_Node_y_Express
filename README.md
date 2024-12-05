# HITO 2 - Node.js - Express - API

Proyecto educativo básico "Creación de un servidor" con node y express

Inicializar el proyecto:

ESTA ES LA CONTINUACIÓN DEL REPOSITORIO: https://github.com/DiegoGonzalezBaeza/Hito-1-


















# 1.- Instalar express:

```bash
npm install express
```

No basta solamente con instalar la dependencia para produccion, si no tambien para developer.

```ts
import express from "express"
```

al escribir el codigo de import, nos mostrar un error en "express", con el cursor encima del problema, visual studio nos dara la solución: 

```bash
npm i --save-dev @types/express
```

Es necesario recordar que se debe instalar los modulos de package.json

```bash
npm install
```
o
```bash
npm i
```

# 2.- Formato de Directorio de trabajo - Estructura Arquitectura en Capas:

Se debe crear las carpetas, para separar las entidades del negocio

```txt
.
├── dist
├── node_modules
├── src
│   └── config
│       └── user.controllers.ts
│       └── product.controllers.ts
│   └── controllers
│       └── user.controllers.ts
│       └── product.controllers.ts
│   └── interface
│       └── user.controllers.ts
│       └── product.controllers.ts
│   └── models
│       └── user.services.ts
│       └── product.services.ts
│   └── routes
│       └── user.services.ts
│       └── product.services.ts
│   └── services
│       └── user.services.ts
│       └── product.services.ts
│   └── utils
│       └── user.services.ts
│       └── product.services.ts
├── package.json
└── tsconfig.json
└── .gitignore
```

# 3.- Instalar nanoid:
Esta dependencia permite que crear id automaticamente.

```bash
npm i nanoid
```

# 4.- Instalar bcryptjs:
Esta dependencia permite cifrar o hashear las passwords.

```bash
npm i bcryptjs
```

A la vez faltan los type:
```bash
npm i --save-dev @types/bcryptjs
```


# 5.- Instalar JWT:
Esta dependencia permite que el cliente reciba las claves de coordenadas (si se cumplio la aoutorización).

```bash
npm install jsonwebtoken
```

A la vez faltan los type:
```bash
npm i --save-dev @types/jsonwebtoken
```
Fuente:  jwt.io

# 6.- Pruebas de funcionamiento:

Operaciones GET:

- Acción de busqueda por medio del id:

![image](./images/Get_user_by_id.webp)

- Acción de busqueda por medio del id, pero como usamos nanoid el id no es numerico en esta vez: 

![image](./images/Get_user_by_id_2.webp)

Operaciones POST:

- Acción de register:

![image](./images/Post_register_user_by_email_password.webp)

- Acción incorrecta de register (email already exist):

![image](./images/Error_Post_register_user_by_email_password.webp)

- Acción de login:

![image](./images/Correct_Post_Login_Email_Password_Token.webp)

- Acción de login incorrecta de login (email not found):

![image](./images/Error_Post_Login_User_not_found_error_email.webp)

- Acción de login incorrecta de login (password incorrect):

![image](./images/Error_Post_Login_Password_incorrect.webp)

Operaciones GET:

-Autorización de vista de la informacion de todos usuarios, al usuario que pertenece el token que esta escrito en Bearer 

![image](./images/Auth_for_token.webp)

-No se permite de vista de la informacion de todos usuarios, token sin autorización. 

![image](./images/No_Auth_for_token_invalid.webp)




POST: http://localhost:3000/api/v1/auth/login

      http://localhost:3000/api/v1/auth/register# Hito-1-
# Hito---2
# Hito-2-Backend_Node_y_Express
