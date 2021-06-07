import pool from '../db/index.js';

export const getGames = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw errconsole.log(`connected as id ${connection.thredId}`)

        connection.query(`SELECT 
                            game_name, 
                            publisher_name, 
                            category_name, 
                            rate, 
                            price_range, 
                            country_name 
                        FROM 
                            games 
                        LEFT JOIN 
                            publishers ON games.publishers_id_publisher = publishers.id_publisher 
                        LEFT JOIN 
                            countries ON publishers.countries_id_country = countries.id_country 
                        LEFT JOIN 
                            categories ON games.categories_id_category = categories.id_category 
                        LEFT JOIN 
                            rates ON games.rates_id_rate = rates.id_rate 
                        LEFT JOIN 
                            prices ON games.prices_id_price = prices.id_price`, 
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

export const createGame = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.thredId}`)

        const params = req.body;

        connection.query('INSERT INTO games SET ?', params, (err, rows) => {
            connection.release()

            if(!err){
                res.send(`Game with the name ${params.game_name} has been added.`)
            } else {
                console.log(err)
            }
        })
    })
}

export const getGame = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw errconsole.log(`connected as id ${connection.thredId}`)

        connection.query(`SELECT 
                            game_name, 
                            publisher_name, 
                            category_name, 
                            rate, 
                            price_range, 
                            country_name 
                        FROM 
                            games 
                        LEFT JOIN 
                            publishers ON games.publishers_id_publisher = publishers.id_publisher 
                        LEFT JOIN 
                            countries ON publishers.countries_id_country = countries.id_country 
                        LEFT JOIN 
                            categories ON games.categories_id_category = categories.id_category 
                        LEFT JOIN 
                            rates ON games.rates_id_rate = rates.id_rate 
                        LEFT JOIN 
                            prices ON games.prices_id_price = prices.id_price 
                        WHERE                        
                            id_game = ?`, 
        [req.params.id], (err, rows) => {
            connection.release()

            if(!err){
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
}

export const deleteGame = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.thredId}`)

        connection.query(`DELETE FROM 
                            games 
                        WHERE 
                            id_game = ?`, [req.params.id], (err, rows) => {
            connection.release()

            if(!err){
                res.send(`Game with the ID ${[req.params.id]} has been deleted.`)
            } else {
                console.log(err)
            }
        })
    })
}

export const updateGame = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.thredId}`)

        /*const {country_id, country_name, country_short, country_flag, country_capital, country_region} = req.body;

        connection.query('UPDATE countries SET country_name = ?, country_short = ?, country_flag = ?, country_capital = ?, country_region = ? WHERE country_id = ?', [country_name, country_short, country_flag, country_capital, country_region, country_id], (err, rows) => {
            connection.release()

            if(!err){
                res.send(`Country with the ID ${country_name} has been updated.`)
            } else {
                console.log(err)
            }
        })*/
    })
}