import pool from '../db/index.js';

export const getApplications = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw errconsole.log(`connected as id ${connection.thredId}`)

        connection.query(`SELECT 
                            application_name, 
                            publisher_name, 
                            category_name, 
                            rate, 
                            price_range, 
                            country_name 
                        FROM
                            applications 
                        LEFT JOIN 
                            publishers ON applications.publishers_id_publisher = publishers.id_publisher 
                        LEFT JOIN 
                            countries ON publishers.countries_id_country = countries.id_country 
                        LEFT JOIN 
                            categories ON applications.categories_id_category = categories.id_category 
                        LEFT JOIN 
                            rates ON applications.rates_id_rate = rates.id_rate 
                        LEFT JOIN 
                            prices ON applications.prices_id_price = prices.id_price`, 
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

export const createApplication = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.thredId}`)

        const params = req.body;

        connection.query('INSERT INTO applications SET ?', params, (err, rows) => {
            connection.release()

            if(!err){
                res.send(`Application with the name ${params.application_name} has been added.`)
            } else {
                console.log(err)
            }
        })
    })
}

export const getApplication = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw errconsole.log(`connected as id ${connection.thredId}`)

        connection.query(`SELECT 
                            application_name, 
                            publisher_name, 
                            category_name, 
                            rate, 
                            price_range, 
                            country_name 
                        FROM 
                            applications 
                        LEFT JOIN 
                            publishers ON applications.publishers_id_publisher = publishers.id_publisher 
                        LEFT JOIN 
                            countries ON publishers.countries_id_country = countries.id_country 
                        LEFT JOIN 
                            categories ON applications.categories_id_category = categories.id_category 
                        LEFT JOIN 
                            rates ON applications.rates_id_rate = rates.id_rate 
                        LEFT JOIN 
                            prices ON applications.prices_id_price = prices.id_price 
                        WHERE 
                            id_application = ?`, [req.params.id], (err, rows) => {
            connection.release()

            if(!err){
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
}

export const deleteApplication = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.thredId}`)

        connection.query('DELETE FROM `applications` WHERE id_application = ?', [req.params.id], (err, rows) => {
            connection.release()

            if(!err){
                res.send(`Application with the ID ${[req.params.id]} has been deleted.`)
            } else {
                console.log(err)
            }
        })
    })
}

export const updateApplication = (req, res) => {
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