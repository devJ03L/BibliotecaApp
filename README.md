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

