# REST API

This a REST API built with node.js, mongodb and express 

---

### Index

- [Description](#description)
- [Instalation](#instalation)
- [Execution](#execution)

---

## Description

Responsive web application that offers the following functionalities:
- list of subjects --> GET /subject/all
- add student in a subject --> PUT /subject/addStudent
- see detail of a subject --> GET /subject/:name
- see detail of a student within a subject --> GET /student/:name


#### Tecnologies

- node.js (Execution environment in JavaScript)
- express (Web service framework for REST APIs)
- mongoose (JS library for conection with MongoDB)
- typescript (Superset of JavaScript)
- cors (To solve issues of communication among servers)
- morgan (To display requests and replies of the server   in console)

---

## Instalation

Libraries:

```
$ npm i -> Installs the packet manager of node.js
$ npm init -y -> Creates 'package.json'
[Change: "scripts": {
    "start": "node dist/index.js",
    "dev": "tsc-watch --onSuccess \"node dist/index.js\"",
    "build": "tsc"
  },]
$ npm i express cors mongoose morgan body-parser -> Installs the dependencies of nodes modules that we need 
$ npm i -D typescript tsc-watch @types/cors @types/express @types/mongoose @types/morgan ->
-> Adds the dependencies of development and the types of TypeScript that we need
$ npx tsc --init -> Creates file with options of the compiler  (tsconfig.json)

[Change: "target": "es6"
    "outDir": "./dist",  
    "rootDir": "./src", ]

```

## Execution

- Open a terminal and execute node:
    
        $ npm run dev

- Make requests



