# MCGA2022-Parcial01

> CRUD application running over Mongoose Atlas using Express and Node.

## Technologies

- The aplication is writen in javascript.
- The data was persisted in a non relational Mongo Atlas Database.
- The server runing in the backend is Node and I use Express as framework.
- To store environmental variables I use dotenv npm package to keep save this sensitive data.

## Install

`npm i express mongoose dotenv nodemon`

## Considerations

Some considerations for use

- All the operations should be made using Postman (There is no web interface yet)
- To obtain a single product by ID, it should be passed by url with this url format

> http://localhost:3000/api/products/_ProductID_

- To obtain a single product by name, the full name should be passed by body in Postman with the next format:

```javascript
{
  "name": "<full name product>"
}

```

## Use

- This aplication can be use for create, read, update or delete (logical) articles from a non SQL database.

This content was created for the first partial exam of the MCGA Course in the Ingeniería de Sistemas de Información career at Universidad Abierta Interamericana.
