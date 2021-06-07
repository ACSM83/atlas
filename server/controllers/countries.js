//import { v4 as uuidv4 } from 'uuid';
import pool from '../db/index.js';

export const getCountries = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw errconsole.log(`connected as id ${connection.thredId}`)

        connection.query('SELECT * from countries', (err, rows) => {
            connection.release()

            if(!err){
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
}

export const createCountry = (req, res) => {
        let country_name = req.body.country_name;
        let country_acronym = req.body.country_acronym;
        let country_capital = req.body.country_capital;
        let country_flag = req.body.country_flag;
        let Regions_id_region = req.body.Regions_id_region;
        let SubRegions_id_SubRegion = req.body.SubRegions_id_SubRegion;
    pool.getConnection((err, connection) => {
        if(err) throw errconsole.log(`connected as id ${connection.thredId}`)

            connection.query(`INSERT INTO 
                                countries (country_name, country_acronym, country_capital, country_flag, Regions_id_region, SubRegions_id_SubRegion) 
                            VALUES (?, ?, ?, ?, ?, ?)`, 
                            [country_name, country_acronym, country_capital, country_flag, Regions_id_region, SubRegions_id_SubRegion], (err, rows) => {
            connection.release()

            if(!err){
                res.send(`Country with the name ${country_name} has been added.`)
            } else {
                console.log(err)
            }
        })
    })
}

export const getCountry = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw errconsole.log(`connected as id ${connection.thredId}`)

        connection.query('SELECT * from countries WHERE id_country = ?', [req.params.id], (err, rows) => {
            connection.release()

            if(!err){
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
}

export const deleteCountry = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.thredId}`)
        
        connection.query('DELETE FROM countries WHERE id_country = ?', id_country, (err, rows) => {
            connection.release()

            if(!err){
                res.send(`Country with the ID ${[id_country]} has been deleted.`)
            } else {
                console.log(err)
            }
        })
    })
}

export const updateCountry = (req, res) => {
    let country_name = req.params.country_name;
    let country_acronym = req.params.country_acronym;
    let country_capital = req.params.country_capital;
    let country_flag = req.params.country_flag;
    let Regions_id_Region = req.params.Regions_id_Region;
    let SubRegions_id_SubRegion = req.params.SubRegions_id_SubRegion;
    
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.thredId}`)

        connection.query(`UPDATE 
                            countries 
                        SET 
                            country_name = ?, country_acronym = ?, country_capital = ?, country_flag = ?, Regions_id_Region = ?, SubRegions_id_SubRegion = ? 
                        WHERE 
                            id_country = ?`, 
                        [country_name, country_acronym, country_capital, country_flag, Regions_id_Region, SubRegions_id_SubRegion], (err, rows) => {
            connection.release()

            if(!err){
                res.send(`Country with the ID ${country_name} has been updated.`)
            } else {
                console.log(err)
            }
        })
    })
}