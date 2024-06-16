# BibliotecaAPP
La aplicación se compone de dos proyectos, una web api hecha con .Net Core y un frontend hecho con React

## Ejecución

### Backend
1. Entrar a la carpeta BibliotecaApp.Backend
2. Ejecutar el comando `dotnet run --project ./BibliotecaApp.API`

### Frontend
1. Entrar a la carpeta BibliotecaApp.Frontend
2. En el archi .env colocar la url donde se está ejecutnado la API, ejemplo https://localhost:7231
3. Ejecutar el comando `yarn dev` o `npm run dev`

## Descripción del proyecto

### Backend
1. El proyecto backend está construido con arquitectura de tres capas.
2. La capa de acceso a datos utiliza Entity Framework Core, combinado con el patrón Generic Repository y Unit of Work
3. La capa de servicios es una biblioteca de clases que cosume la capa de acceso a datos
3. Se utiliza AutoMapper para convertir los objetos de las entidades a objetos de DTO
4. La capa de presentacion es una web api que consume la capa de servicios
5. Las primeras dos capas, acceso a datos y servicios, tiene una clase estatica con un metodo de extensión donde se hace la inyección de dependencias

## Frontend
1. El proyecto frontend está construido con React, Redux, Axios, React-Router, React-Modal y React-Data-Table-Component
2. Hay dos hooks para el manejo de la peticiones, el useFetch y el useSubmit. Ambos reciben como parametro la función para recuperar o enviar datos
3. Redux se usa para manejar el estado global que muestra y oculta los modals

## Descripción del funcionamiento
1. En el frontend hay dos rutas, libros y prestamos
2. La ruta de /libros muestra una tabla con el título y ejemplares disponibles, además de las acciones de prestar, eliminar y agregar
3. Al agregar un libro, este se mostrará en la tabla despues de cerrar el modal
4. Al prestar un libro se descontará uno del numeró de disponibles, y en la ruta /prestamos se mostrará un registro con los datos del prestamo
5. Al eliminar un libro, esté se borrará  del listado, siempre y cuando no exista un prestamo con uno de los ejemplares disponibles
6. La ruta de /prestamos muestra todos los prestamos activos
7. Al devolver un libro, el prestamo deaparece y en la tabla de /libros se agrega un ejemplar disponible
