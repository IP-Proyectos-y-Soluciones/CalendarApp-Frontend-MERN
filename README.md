# CalendarApp - Frontend

Este proyecto forma parte de la aplicación de calendario desarrollada con el stack MERN (Mongo, Express, React, Node). A continuación se detallan las características y los pasos de desarrollo del proyecto.

## Características del Proyecto

### Estructura y Diseño de nuestra Aplicación de Calendario

La aplicación está diseñada con una estructura modular y escalable, permitiendo un fácil mantenimiento y expansión. Utiliza componentes reutilizables y una organización de archivos coherente.

### Uso de Componentes de Terceros

Se han incorporado diversos componentes de terceros para mejorar la funcionalidad y la experiencia del usuario. Entre ellos se encuentran `react-datepicker` para la selección de fechas y `sweetalert2` para las alertas personalizadas.

### Modals

Los modales se utilizan para la creación y edición de eventos en el calendario, proporcionando una interfaz de usuario intuitiva y eficiente.

### Configuración de Redux

Se ha configurado Redux para manejar el estado global de la aplicación, facilitando la gestión de datos a lo largo de los diferentes componentes.

### CRUD Local

La aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) localmente para gestionar los eventos del calendario de manera eficiente.

### Preparación de Pantallas para Futuras Secciones

Se han preparado pantallas adicionales para futuras expansiones de la aplicación, asegurando una fácil integración de nuevas funcionalidades.

### Uso de MomentJS

Se utiliza MomentJS para el manejo y la manipulación de fechas, ofreciendo una potente y flexible herramienta para trabajar con fechas y tiempos.

### Manejo de Fechas

El manejo de fechas es esencial en una aplicación de calendario. Se han implementado diversas funcionalidades para gestionar fechas de manera precisa y eficiente.

## Pasos de Desarrollo

### 1. Renombrar el Archivo .env.template a .env

Renombra el archivo `.env.template` a `.env` en el directorio raíz del proyecto.

### 2. Hacer los Cambios Respectivos en las Variables de Entorno

Modifica las variables de entorno según sea necesario. Por ejemplo, ajusta la URL de la API en el archivo `.env`:

```sh
VITE_API_URL=http://localhost:4000/api
```

### Conexión de nuestro Backend con el Frontend

En esta sección se integra el backend con el frontend hecho en React. Se llama a los servicios y se disparan las acciones necesarias que ya están definidas en nuestra aplicación de calendario.

Esta parte se enfoca en la autenticación y el manejo del JWT, incluyendo el almacenamiento y la actualización del token de autenticación, así como la realización de las pruebas necesarias.

### Eventos del Calendario + Backend

Esta sección se dedica a hacer persistentes los cambios y eventos del calendario utilizando el backend. Se disparan acciones asíncronas que terminan ejecutando las acciones síncronas previamente definidas.

## Instalación y Ejecución

Para instalar y ejecutar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio:

   ```sh
   git clone git@github.com:IP-Proyectos-y-Soluciones/CalendarApp-Frontend-MERN.git
   ```

2. Navega al directorio del proyecto:

   ```sh
   cd CalendarApp
   ```

3. Instala las dependencias:

   ```sh
   yarn install
   ```

4. Renombra el archivo `.env.template` a `.env` y ajusta las variables de entorno según sea necesario.
5. Inicia la aplicación:

   ```sh
   yarn dev
   ```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, por favor abre un issue o envía un pull request.
