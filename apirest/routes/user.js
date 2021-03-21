'use strict'

const express = require('express');
const api = express.Router();
const bcrypt = require('bcrypt-nodejs');
const jwt = require('../service/jwt');
const db = require('../database');
//Get usuarios
api.get('/users', (req, res) => {    
    const sql = 'SELECT * FROM users'
    db.query(sql, (err, data) => {
        if (err) {
            console.log(err);
        }else{
            res.json(data)
        }        
    });
    
});
//Get Usuario por id
api.get('/user:id', (req,res) => {
    const {id} = req.params
    const sql = 'SELECT * FROM users WHERE id = ?'
    db.query(sql, [id], function (err, data) {
        if (err){
            console.log("An error occurred.");
        }else{
            res.json(data)
        }
    });

});
//Signup
api.post('/signup', function(req, res){
    const params = req.body;
    const first_name = params.first_name;
    const last_name = params.last_name;
    const email = params.email;
    const password = params.password;
    
    bcrypt.hash(password, null, null, (err, hash) => {
        
        const sql = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)';
        

        db.query(sql, [first_name, last_name, email, hash], (err, data) =>{
            if (err){
                console.log(err);
            }else{
                console.log("1 record successfully inserted into db");
            }
        
        });
            console.log(hash);
    });   
});   
//login
api.post('/login', function(req, res) {
    const params = req.body;
    
    const email = params.email;
    const password = params.password;    

    db.query('SELECT * FROM users WHERE email = ?', [email], (err, data) => {
        if (err) return res.status(500).send({message: "error en la petición"});

        if(data){
            bcrypt.compare(password, data[0].password, (err, data) => {                
                if(data){
                    if(params.getToken){
                        return res.status(200).send({
                            token:jwt.createToken(data)
                        });
                    }else{
                        //user.password = undefined;
                        return res.status(200).send({data})
                    }
                }else{
                    return res.status(404).send({message:"El usuario no se ha podido iddentificar"});
                }                
            });
        }else{
            return res.status(404).send({message:"El usuario no se ha podido identificar!!"});
        }
        
    }); 

});
//CRUD operations
//all operations
api.get('/list', (req, res) => {
    const sql = 'SELECT * FROM operation'
    db.query(sql, function(err, data) {
        if(err) throw err;
        else{
            res.json(data);
        }
    });
});
//last operations
api.get('/operations', (req, res) => {
    const sql = 'SELECT * FROM operation ORDER BY id LIMIT 10'
    db.query(sql, function(err, data) {
        if(err) throw err;
        else{
            res.json(data);
        }
    });
});
//get operations id
api.get('/list:id', (req, res) => {
    const {id} = req.params
    const sql = 'SELECT * FROM operation WHERE id = ?'
    db.query(sql, [id], function (err, data) {
        if (err){
            console.log("An error occurred.");
        }else{
            res.json(data)
        }
    });
});
//record data
api.post('/register-list', function(req, res){
    const params = req.body;

    const concept = params.concept;
    const price = params.price;
    const date = params.date;
    const type = params.type;
    const categories = params.categories;
    
    
    const sql = 'INSERT INTO operation (concept, price, date, type, categories) VALUES (?,?,?,?,?)';
    
    db.query(sql, [concept, price, date, type, categories], function (err, data) {
        if (err){
            console.log("An error occurred.");
        }else{
            console.log("1 record successfully inserted into db");
        }

    });

});
//edit
api.put('/:id', (req, res) => {
    const { id } = req.params;
    const {concept, price, date, categories} = req.body;
    
    const sql = `UPDATE operation set concept = '${concept}', price = '${price}', date = '${date}', categories = '${categories}'
                WHERE id = '${id}'
                `
    db.query(sql, [id], function(err,data) {
        if (err) throw err
        else{
            res.json({message: 'Operación editada'})
        }
    });
});
//delete
api.delete('/:id', (req, res) => {
    const { id } = req.params

    const sql = 'DELETE FROM operation WHERE id = ?'
    db.query(sql, [id], function(err, data) {
        if (err){
            console.log("An error occurred.");
        }else{
            console.log("operación eliminada");
        }
    });

});
//categories
//expenses
api.get('/expenses', (req, res) => {
    const sql = 'SELECT * FROM operation WHERE categories = "Gastos Operativos" '
    db.query(sql, function(err, data) {
        if(err) throw err;
        else{
            res.json(data);
        }
    });
});
//fun
api.get('/fun', (req, res) => {
    const sql = 'SELECT * FROM operation WHERE categories = "Recreacion" '
    db.query(sql, function(err, data) {
        if(err) throw err;
        else{
            res.json(data);
        }
    });
});
//investment
api.get('/investment', (req, res) => {
    const sql = 'SELECT * FROM operation WHERE categories = "Inversión" '
    db.query(sql, function(err, data) {
        if(err) throw err;
        else{
            res.json(data);
        }
    });
});
//saving
api.get('/saving', (req, res) => {
    const sql = 'SELECT * FROM operation WHERE categories = "Ahorro" '
    db.query(sql, function(err, data) {
        if(err) throw err;
        else{
            res.json(data);
        }
    });
});
//Balance
//entry
api.get('/entry', (req, res) => {
    const sql = "SELECT SUM(price) Ingreso FROM operation WHERE type = 'Ingreso' "
    db.query(sql, function(err, data) {
        if(err) throw err;
        else{
            res.json(data);
        }
    });
});
//exit
api.get('/exit', (req, res) => {
    const sql = "SELECT SUM(price) Egreso FROM operation WHERE type = 'Egreso' "
    db.query(sql, function(err, data) {
        if(err) throw err;
        else{
            res.json(data);
        }
    });
});
api.get('/result', (req, res) => {
    const sql = ""
    db.query(sql, function(err, data) {
        if(err) throw err;
        else{
            res.json(data);
        }
    });
});

module.exports = api;

