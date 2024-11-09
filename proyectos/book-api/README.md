# 🏛️ Biblioteca TCP 📚  

Este proyecto tiene como objetivo implementar un servidor y un cliente **TCP** que permite gestionar una biblioteca. El usuario puede listar, agregar y buscar a través de comandos enviados desde el cliente al servidor.

## Estructura ✨🤓
📁 book-api  
|-------------------------------|--------------------------------------------------------------------------   
|──  📁 controllers    
|   └── bookController.js          *# Controlador para gestionar los libros (agregar, buscar, etc.)*  
|   └── authorController.js *# Controlador para gestionar los autores.*  
|   └── publisherController.js *#Controlador para gestionar editoriales.*    
|   └── completeBookController.js  *#Controlador para agregar la información completa de los libros.*  
|-------------------------------|--------------------------------------------------------------------------   
|── 📁 models  
|   └── booksModel.js        *# Modelo que interactúa con el manejo de libros.*    
|   └── authorsModel.js      *# Modelo que interactúa con el manejo de autores.*   
|   └── publisher.js        *#Modelo que interactúa con el manejo de editoriales.*     
|-------------------------------|--------------------------------------------------------------------------   
|── 📁 views  
|   └── responseView.js          *# Función para formatear las respuestas del servidor.*    
|-------------------------------|--------------------------------------------------------------------------   
|── 📁 data  
│   └── books.json           *# Archivo JSON que almacena los datos de los libros.*     
│   └── author.json          *# Archivo JSON que almacena los datos de los autores.*     
│   └── publisher.json       *# Archivo JSON que almacena los datos de las editoriales.*   
|-------------------------------|--------------------------------------------------------------------------   
|── server.js                *# Archivo principal del servidor TCP.*      
|── client.js                *# Cliente que se conecta al servidor TCP.*      
|── README.md                *# Instrucciones y detalles del proyecto.*      
|── package.json             *# Archivo de configuración del proyecto.*    


## 🛠 Skills

- Javascript
- Node.js
- TCP
- JSON
- MVC
- FS

## 📝 ¿Cómo usar este proyecto?
**Instalar dependencias**

```bash
  npm install
```

y

```bash
  npm install uuid
```
**Ejecución**
El proyecto inicializa con:
```bash
  server.js
```
El servidor esta conectado al puerto 8080 
Después conectar al cliente; una vez conectado se mostrará el menú.
```bash
  cliente.js
```
## 📋 Menú
[1] Listado  
[2] Agregar libro  
[3] Buscar libro   
[0] CANCEL  

## 📜 Ejemplos de comandos
1- Listado   
A continuación se mostrara el siguiente submenú:  
    [1] Libros  
    [2] Autores  
    [3] Editorial  
    [4] Completo  
    [0] CANCEL  
Al seleccionar 1 se debería mostrar 
```bash
    [
  {
    "id": 1,
    "title": "Vas a ser mia",
    "gender": "Misterio"
  },
  {
    "id": 2,
    "title": "Enlazados",
    "gender": "Romance"
  }
]
```

---
Desarrollado con 💜 por Gaby by [Ada](https://linktr.ee/adaitw)