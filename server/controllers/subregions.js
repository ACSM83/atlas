import pool from '../db/index.js';

export const getSubRegions = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw errconsole.log(`connected as id ${connection.thredId}`)

        connection.query(`SELECT * FROM subregions`, (err, rows) => {
            connection.release()

            if(!err){
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
}

export const createSubRegion = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.thredId}`)

        const params = req.body;

        connection.query('INSERT INTO subregions SET ?', params, (err, rows) => {
            connection.release()

            if(!err){
                res.send(`Sub-region with the name ${params.name} has been added.`)
            } else {
                console.log(err)
            }
        })
    })
}

export const getSubRegion = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw errconsole.log(`connected as id ${connection.thredId}`)

        connection.query('SELECT name FROM `subregions` WHERE id_SubRegion = ?', [req.params.id], (err, rows) => {
            connection.release()

            if(!err){
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
}

export const deleteSubRegion = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.thredId}`)

        connection.query('DELETE FROM `subregions` WHERE id_SubRegion = ?', [req.params.id], (err, rows) => {
            connection.release()

            if(!err){
                res.send(`Sub-region with the ID ${[req.params.id]} has been deleted.`)
            } else {
                console.log(err)
            }
        })
    })
}

export const updateSubRegion = (req, res) => {
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