import { v4 as uuidv4 } from 'uuid';
import pool from '../db/index.js';


export const getUsers = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
            console.log(`connected as id ${connection.thredId}`)

        connection.query(`SELECT 
                            id_user, 
                            username, 
                            date_dreation, 
                            country_name 
                        FROM 
                            users
                        INNER JOIN
                            countries
                        ON countries_id_country = id_country`, 
                        (err, rows) => {
            connection.release()

            if(!err){
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
}

export const loginUser = (req, res) => {    
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.thredId}`)

        const username = req.body.username;
        const password = req.body.password;

        connection.query(`SELECT * FROM users WHERE username = ? AND password = ?`, [username, password], (err, rows) => {
            connection.release()

            if(err){
                res.send({err: err})
            }
            if (result.length > 0) {
                res.send(result)
            } else {
                res.send({message: "Username ou password incorretos!"})
            }
            
        })
    })
}
export const createUser = (req, res) => {
    const user = req.body;

    users.push({...user, id: uuidv4()});//para adicionar o id ao nosso objeto user que não tinha id na sua estrutura, utilizamos o spread operator e depois passamos o id para o topo

    res.send(`User ${user.username} added to the database!`);
}

export const getUser = (req, res) => {
    const { id } = req.params;
    
    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted from the database.`)
}

/*export const updateUser = (req, res) => {
    const { id } = req.params; //1. guardamos nesta variável o parametro :id 
    const { username, lastName, age } = req.body;

    const user = users.find((user) => user.id === id);//2. aqui verificamos se encontramos o user na nossa bd

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User with the id ${id} has been updated`);
}*/