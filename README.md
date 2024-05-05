# Como ejecutar el programa

## Preparar el entorno
1. Clonar el repositorio
2. Instalar dependencias con `npm install` o con `bun install`
3. Renombrar `.env.template` a `.env`
4. Crear y ejecutar contenedor con `docker-compose up -d`
5. Crear la base de datos a partir del modelo con `bunx prisma db push`
6. Rellenar la base de datos con `bun run seed`

## Ejecutar el programa
1. Ejecutar el comando `bun start`
2. Seguir las indicaciones del programa aportando por consola los inputs necesarios en cada momento