# 🌸 Essencia - Floristería & Cafetería ☕

Aplicación completa (backend + frontend) para **Essencia**, una floristería y cafetería diseñada para ofrecer una experiencia única combinando la belleza de las flores con el aroma y sabor del café.

## 🛠️ Tecnologías Utilizadas

- Backend: .NET / Web API
- Base de datos: SQL Server en Docker
- Frontend: HTML5, SCSS (Sass), JavaScript (ES6+)
- Contenedores: Docker, Docker Compose
- Herramientas: Postman, GitHub, Docker Hub

## 🐳 Base de datos en SQL Server (Docker)

### Encender Docker en Mac

docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=P@ssw0rd2025!' -p 8308:1433 --platform linux/amd64 -d mcr.microsoft.com/mssql/server:2022-latest


### Encender Docker en Windows

docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=P@ssw0rd2025!" -p 8308:1433 --platform linux/amd64 -d mcr.microsoft.com/mssql/server:2022-latest

### Datos de conexión

- Servidor: `localhost`
- Puerto: `8308`
- Usuario: `sa`
- Password: `P@ssw0rd2025!`

## ⚙️ Backend (.NET + Docker)

### Encender el proyecto .NET
dotnet restore
dotnet build
dotnet run 

### Levantar el Docker del backend
docker build -t annii009/essencia-api:1.0 .
docker compose up -d


### Subir la imagen a Docker Hub

docker login
docker push annii009/essencia-api:1.0

### Repositorios y recursos backend

- Git (backend): https://github.com/Annii009/EssenciaBackend.git
- Docker Hub (API): https://hub.docker.com/repository/docker/annii009/essencia-api/general

## 🎨 Frontend

Este es el repositorio del frontend de Essencia, una floristería y cafetería diseñada para ofrecer una experiencia única combinando la belleza de las flores con el aroma y sabor del café.

### Tecnologías utilizadas (frontend)

- HTML5: estructura semántica de todo el contenido.
- SCSS (Sass): preprocesador de CSS para estilos modulares, escalables y fáciles de mantener (variables, mixins, anidamiento).
- JavaScript (ES6+): interactividad del sitio, animaciones, manejo de eventos y validaciones en el lado del cliente.

### Docker para el front

Dentro de `essenciafront/frontend`:

docker build -t annii009/essencia-front:1.0 .

Dentro de `essenciabackend`:

docker compose down
docker compose up -d

### Página del front

http://localhost:8080/html/index.html

## 🚀 Inicio Rápido (Frontend local)

1. Clonar el repositorio:

git clone https://github.com/Annii009/Essenciafront.git
cd Essenciafront

2. Compilación de estilos: asegurar que los archivos SCSS se compilen a CSS (extensión de VS Code o herramienta de línea de comandos).
3. Abrir la aplicación: abrir el archivo principal `index.html` en el navegador.

## 🤝 Contribución

- Haz un fork del proyecto.
- Crea tu rama de feature:

git checkout -b feature/nombre-de-la-feature

- Asegúrate de que el SCSS se compile correctamente después de cualquier cambio en estilos.
- Realiza el commit de tus cambios:

git commit -m "feat: Descripción breve de la funcionalidad"

- Abre un Pull Request para revisión.

## 📬 Colección Postman

Colección para probar la API:

https://anaheralmudi-8976383.postman.co/workspace/Ana-Hernandez's-Workspace~52058e76-8724-401b-87bf-5ab51c447bc0/collection/49401958-1aea7b5e-cd30-48d6-95d4-fde8127edd95?action=share&creator=49401958

## 📧 Contacto

Ana Hernandez Almudi – [anaheralmudi@gmail.com](mailto:anaheralmudi@gmail.com)  
Enlace a mi página web: https://anaalmudi.com


