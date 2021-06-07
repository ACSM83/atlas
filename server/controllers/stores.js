import pool from '../db/index.js';

export const getStores = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw errconsole.log(`connected as id ${connection.thredId}`)

        connection.query(`SELECT 
                            * 
                        FROM
                            stores`, 
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

export const createStore = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.thredId}`)

        const params = req.body;

        connection.query('INSERT INTO stores SET ?', params, (err, rows) => {
            connection.release()

            if(!err){
                res.send(`Store with the name ${params.store_name} has been added.`)
            } else {
                console.log(err)
            }
        })
    })
}

export const getStore = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw errconsole.log(`connected as id ${connection.thredId}`)

        connection.query(`SELECT 
                            application_name AS product_name, 
                            application_icon, 
                            publisher_name, 
                            category_name, 
                            rate, 
                            price_range, 
                            year, 
                            total, 
                            GROUP_CONCAT(store_name) as store_name
                        FROM 
                            applications 
                        LEFT JOIN
                            publishers ON id_publisher = publishers_id_publisher 
                        LEFT JOIN 
                            categories ON id_category = categories_id_category 
                        LEFT JOIN 
                            rates ON rate = rates_id_rate 
                        LEFT JOIN 
                            prices ON id_price = prices_id_price 
                        LEFT JOIN 
                            appdownloads ON applications_id_application = id_application 
                        LEFT JOIN 
                            stores_has_applications ON stores_has_applications.applications_id_application = id_application 
                        LEFT JOIN 
                            stores ON stores.id_store = stores_has_applications.stores_id_store 
                        WHERE 
                            id_store = ? 
                        GROUP BY 
                            id_publisher
                        UNION ALL 
                        SELECT 
                            game_name AS product_name,
                            game_icon, 
                            publisher_name, 
                            category_name,
                            rate, 
                            price_range, 
                            year, 
                            total, 
                            GROUP_CONCAT(store_name) as store_name 
                        FROM 
                            games 
                        LEFT JOIN 
                            publishers ON id_publisher = publishers_id_publisher 
                        LEFT JOIN 
                            categories ON id_category = categories_id_category 
                        LEFT JOIN 
                            rates ON rate = rates_id_rate 
                        LEFT JOIN 
                            prices ON id_price = prices_id_price 
                        LEFT JOIN 
                            gamedownloads ON games_id_game = id_game 
                        LEFT JOIN 
                            games_has_stores ON games_has_stores.games_id_game = id_game 
                        LEFT JOIN 
                            stores ON stores.id_store = games_has_stores.stores_id_store 
                        WHERE id_store = ?
                        GROUP BY 
                            id_publisher`, 
                        [req.params.id, req.params.id], (err, rows) => {
            connection.release()

            if(!err){
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
}

export const deleteStore = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.thredId}`)

        connection.query('DELETE FROM stores WHERE id_store = ?', [req.params.id], (err, rows) => {
            connection.release()

            if(!err){
                res.send(`Store with the ID ${[req.params.id]} has been deleted.`)
            } else {
                console.log(err)
            }
        })
    })
}

export const updateStore = (req, res) => {
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